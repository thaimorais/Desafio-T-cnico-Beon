import React from 'react';
import Search from '../components/search';
import FilterByPeriod from '../components/filterbyperiod';
import ListBooks from '../components/listbooks';

export default function Initial() {
  return (
    <main>
      <Search />
      <FilterByPeriod />
      <ListBooks />
    </main>
  );
}
