import { expect } from 'chai';
import Sinon from 'sinon';
import mongoose, { Model } from 'mongoose';
import BooksService from '../../src/Services/BooksService';
import createMock from './mock/createBooksMock';

describe('Book service unit tests', function () {
  it('Should successfully return all books', async function () {
    await mongoose.connect('mongodb://localhost:27017/books');
    Sinon.stub(Model, 'find').resolves(createMock)


    const service = new BooksService();
    const result = await service.getAllBooks();
    console.log(result);
    

    expect(result).to.be.deep.equal(createMock);
  });
});