import PropTypes from 'prop-types';
import React, { useState, useMemo, useEffect } from 'react';
import api from '../api/books'
import AppContext from './AppContext';

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      const request = await api.getBooks();
      setBooks(request.data[0].books);
    };
    fetchBooks();
  }, []);

  const contextValue = useMemo(() => ({
    books,
    setBooks,
    currentPage,
    setCurrentPage
  }), [books, setBooks, currentPage, setCurrentPage]);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
