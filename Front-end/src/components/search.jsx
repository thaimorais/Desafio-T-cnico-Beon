import React, { useContext, useEffect, useState } from 'react';
import api from '../api/books';
import '../header.css';
import AppContext from '../context/AppContext';

export default function Search() {
  const [valueToSearch, setValueToSearch] = useState('');
  const { setBooks } = useContext(AppContext);

  const search = async (value) => {
    const request = await api.foundBooks(value);
    setBooks(request.data);
  };

  return (
    <div className='header'>
      <h1>BUSCA livros</h1>
      <input
          id='input-search'
          type="search"
          name="search"
          placeholder="Pesquisar por autor, título ou idioma"
          value={ valueToSearch }
          onChange={ ({ target }) => setValueToSearch(target.value) }
        />
        <button
          className='button-search'
          type="button"
          onClick={ () => search(valueToSearch) }
        >
          Pesquisar
        </button>
    </div>
  );
}
