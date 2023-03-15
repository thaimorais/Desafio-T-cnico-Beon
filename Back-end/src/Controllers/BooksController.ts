import { NextFunction, Request, Response } from 'express';
import BooksService from '../Services/BooksService';

export default class BooksController {
  private req: Request
  private res: Response;
  private next: NextFunction;
  private service: BooksService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new BooksService();
  }

  public async getAllBooks() { 
    const books = await this.service.getAllBooks();
    return this.res.status(200).json(books);
  }

  public async fetchBooks() {
    const { fetchby } = this.req.headers;
    if (typeof(fetchby) == 'string') {
      const books = await this.service
        .fetchBooks(fetchby.toLowerCase());

      return this.res.status(200).json(books);
    }
  }

  public async filterByPeriod() {
    const { minimumyear, maximumyear } = this.req.headers;
    
    if (typeof(minimumyear) == 'string' && typeof(maximumyear) == 'string') {
      const books = await 
        this.service.filterByPeriod(minimumyear, maximumyear);

      return this.res.status(200).json(books);
    }
  }
}