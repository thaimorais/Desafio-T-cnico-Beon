import { Schema } from 'mongoose';
import IBook from '../Interfaces/IBook';
import AbstractODM from './AbstractODM';

export default class BooksODM extends AbstractODM<IBook> {
  constructor() {
    const schema = new Schema<IBook> ({
      books: [{
      author: { type: String, required: true },
      country: { type: String, required: true },
      imageLink: { type: String, required: true },
      language: { type: String, required: true },
      link: { type: String, required: true },
      pages: { type: Number, required: true },
      title: { type: String, required: true },
      year: { type: Number, required: true },
    }]});
    super(schema, 'books');
  }
}