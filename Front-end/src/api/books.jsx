import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3006' });

const getBooks = async () => {
  try {
    const response = await API.get('/books');
    return response;
  } catch (error) {
    return error.response;
  }
};

const filterByPeriod = async (minimumYear, maximumYear) => {
  try {
    const response = await API.get('/filterByPeriod', { headers: {
      minimumyear: minimumYear,
      maximumyear: maximumYear
    }});
    return response;
  } catch (error) {
    return error.response;
  }
};

const foundBooks = async (value) => {
  try {
    const response = await API.get('/foundbooks', { headers: {
      fetchby: value
    } });
    return response;
  } catch (error) {
    return error.response;
  }
};

export default {
  getBooks,
  filterByPeriod,
  foundBooks,
};
