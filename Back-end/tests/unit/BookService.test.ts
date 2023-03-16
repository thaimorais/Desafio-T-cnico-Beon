import { expect } from 'chai';
import { describe, beforeEach, it } from '@jest/globals';
import Sinon from 'sinon';
import mongoose, { Model } from 'mongoose';
import BooksService from '../../src/Services/BooksService';
import mock from './mock/createBooksMock';

describe('Book service unit tests', function () {
  beforeEach(async () => {
    await mongoose.connect('mongodb://localhost:27017/books');
  }); 

  it('Should successfully return all books', async function () {
    Sinon.stub(Model, 'find').resolves(mock.createMockAll)

    const service = new BooksService();
    const result = await service.getAllBooks();

    expect(result).to.be.deep.equal(mock.createMockAll);
  });

  it('Should successfully return books for language', async function () {
    const service = new BooksService();
    const result = await service.fetchBooks('english');

    expect(result[0]).to.be.deep.equal(mock.foundBy[0]);
  });

  it('Should successfully return books for period', async function () {
    const service = new BooksService();
    const result = await service.filterByPeriod('1950', '1955');

    expect(result[0]).to.be.deep.equal(mock.filterByPeriod[0]);
  });
});