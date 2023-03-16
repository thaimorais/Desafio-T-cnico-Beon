import app from './app';
import connectToDatabase from '../Models/Connection';
import 'dotenv/config';
import { createClient } from 'redis';

const client = createClient();

const PORT = process.env.PORT_BACKEND || 3006;

const startup = async () => {
  await client.connect();
  connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  });
}

startup();
export default client;
