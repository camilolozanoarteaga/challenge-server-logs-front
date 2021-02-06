const Api = (method, url, body) => {
  return fetch(url, {
    method,
  });
};

const getAllAlerts = (spell, page, limit) => {
  const search = spell ? `&spell=${spell.toUpperCase()}` : '';
  const url = `http://localhost:3002/api/v1/logs?page=${page}&limit=${limit}${search}`;

  const response = Api('GET', url, null);
  return response.then((response) => response.json());
};

const getAlertBiyId = (id) => {
  const url = 'http://localhost:3002/api/v1/servers';
  return Api('GET', url, null);
};

export { getAllAlerts, getAlertBiyId };
