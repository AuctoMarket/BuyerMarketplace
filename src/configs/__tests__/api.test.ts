import api from '../api';

describe('api', () => {
  it('should return baseUrl', () => {
    expect(api.baseUrl).toBe('http://localhost:8080/api/v1');
  });
});
