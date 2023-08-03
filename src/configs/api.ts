const scheme = process.env.REACT_APP_API_SCHEME || 'http';
const host = process.env.REACT_APP_API_HOST || 'localhost';
const port = process.env.REACT_APP_API_PORT || '8080';
const pathname = process.env.REACT_APP_API_PATHNAME || '/api/v1';

const api = {
  baseUrl: `${scheme}://${host}:${port}${pathname}`,
};

export default api;
