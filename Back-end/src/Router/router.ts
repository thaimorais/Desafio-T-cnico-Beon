import { Router } from 'express';
import BooksController from '../Controllers/BooksController';

const route = Router();

route.get(
  '/foundbooks',
  (req, res, next) => new BooksController(req, res, next).fetchBooks(),
)

route.get(
  '/filterByPeriod',
  (req, res, next) => new BooksController(req, res, next).filterByPeriod(),
)

route.get(
  '/books',
  (req, res, next) => new BooksController(req, res, next).getAllBooks(),
)

export default route;
