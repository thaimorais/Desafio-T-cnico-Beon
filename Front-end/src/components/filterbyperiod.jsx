import React, { useContext, useEffect, useState } from 'react';
import api from '../api/books';
import AppContext from '../context/AppContext';

export default function FilterByPeriod() {
  const [minimumYear, setMinimumYear] = useState(0);
  const [maximumYear, setMaximumYear] = useState(0);
  const { setBooks } = useContext(AppContext);

  const search = async (minimumYear, maximumYear) => {
    const request = await api.filterByPeriod(minimumYear, maximumYear);
    setBooks(request.data);
  };

  return (
    <div>
      <h2>Filtrar ano da publicação:</h2>
      <div id='filter-area'>
        <input
            className='input-filter'
            type="number"
            name="filter-1"
            placeholder="Início"
            value={ minimumYear }
            onChange={ ({ target }) => setMinimumYear(target.value) }
          />
          <p>até</p>
          <input
            className='input-filter'
            type="number"
            name="filter-2"
            placeholder="Final"
            value={ maximumYear }
            onChange={ ({ target }) => setMaximumYear(target.value) }
          />
          <button
            className='button-search'
            type="button"
            onClick={ () => search(minimumYear, maximumYear) }
          >
            Pesquisar
          </button>
        </div>
    </div>
  );
}
