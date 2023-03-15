import route from "../src/Router/router";
import cors from 'cors';
import { NextFunction, Request, Response } from "express";
import express from "express";

const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods: POST, GET');
  res.header('Access-Control-Expose-Headers', '*');
  next();
});

app.use(route);

export default app;