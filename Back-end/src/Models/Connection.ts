import mongoose from "mongoose";
import 'dotenv/config';

const MONGO_URI = 'mongodb://localhost:27017/book';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_DB_URL || MONGO_URI,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
