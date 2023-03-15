import PropTypes from 'prop-types';
import React, { useState, useMemo, useEffect } from 'react';
import api from '../api/books'
import AppContext from './AppContext';

function Provider({ children }) {
  const [books, setBooks] = useState([]);

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
  }), [books, setBooks]);

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
