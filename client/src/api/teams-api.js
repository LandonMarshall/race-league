import api from 'api/api.config';

const RESOURCE_URL = '/api/teams';

export const getTeams = () => api
  .get(RESOURCE_URL, {});

export const addTeam = (user) => api
  .post(RESOURCE_URL, user);