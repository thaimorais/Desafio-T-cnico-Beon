import { NextFunction, Request, Response } from 'express';
import BooksService from '../Services/BooksService';
import client from '../api/server';

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
    try {
      const cacheKey = 'allBooks';
      const cacheAllBooks = await client.get(cacheKey);

      if (cacheAllBooks) return this.res.status(200).json(JSON.parse(cacheAllBooks));
      
      const books = await this.service.getAllBooks();
      await client.set(cacheKey, JSON.stringify(books));

      return this.res.status(200).json(books);
    } catch (e) {
      return this.res.json(e);
    }
    
  }

  public async fetchBooks() {  
    try {
      const { fetchby } = this.req.headers;
      if (typeof(fetchby) == 'string') {
        const books = await this.service
          .fetchBooks(fetchby.toLowerCase());

        return this.res.status(200).json(books);
      }
    } catch (e) {
      return this.res.json(e);
    }
    
  }

  public async filterByPeriod() {
    try {
      const { minimumyear, maximumyear } = this.req.headers;
    
      if (typeof(minimumyear) == 'string' && typeof(maximumyear) == 'string') {
        const books = await 
          this.service.filterByPeriod(minimumyear, maximumyear);

        return this.res.status(200).json(books);
      }
    } catch (e) {
      return this.res.json(e);
    }
    
  }
}