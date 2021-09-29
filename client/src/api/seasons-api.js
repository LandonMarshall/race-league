import api from 'api/api.config';

const RESOURCE_URL = '/api/seasons';

export const getSeasons = () => api
  .get(RESOURCE_URL, {});
