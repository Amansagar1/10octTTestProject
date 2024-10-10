import axios from 'axios';

const api = {
  getCountries: () => axios.get('/api/getCountries'),
  getStates: (countryId) => axios.get(`/api/getStates/${countryId}`),
  getCities: (countryId, stateId) => axios.get(`/api/getCities/${countryId}/${stateId}`),
  saveItemsSuppliers: (data) => axios.post('/api/saveItemsSuppliers', data),
  getItemsWithSuppliers: () => axios.get('/api/getItemsWithSuppliers'),
};

export default api;
