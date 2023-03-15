export default interface IBook {
  books: [{
    author: string,
    country: string,
    imageLink: string,
    language: string,
    link: string,
    pages: number,
    title: string,
    year: number,
  }]
}