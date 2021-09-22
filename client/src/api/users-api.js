import api from 'api/api.config';

const RESOURCE_URL = '/api/users';

export const getUsers = () => api
  .get(RESOURCE_URL, {});