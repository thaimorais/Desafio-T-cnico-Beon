import BooksODM from "../Models/BooksODM";

export default class BooksService {
  public async getAllBooks() { 
    const booksODM = new BooksODM();
    const books = await booksODM.findAll();

    return books;
  }

  public async fetchBooks(value: string) {
    const allBooks = await this.getAllBooks();
    const { books } = allBooks[0];

    const found = books.filter((book) => (
        book.author.toLowerCase() === value 
        || book.language.toLowerCase() === value 
        || book.title.toLowerCase() === value
      ))
    
    return found;
  }

  public async filterByPeriod(minimumYear: string, maximumYear: string) {
    const allBooks = await this.getAllBooks();
    const { books } = allBooks[0];

    const found = books.filter((book) => (
      book.year >= Number(minimumYear) && book.year <= Number(maximumYear)
      ))
  
    return found;
  }
}