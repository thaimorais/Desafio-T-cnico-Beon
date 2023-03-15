import app from './app';
import connectToDatabase from '../Models/Connection';
import 'dotenv/config';

const PORT = process.env.PORT_DB || 3006;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  });
