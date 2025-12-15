const request = require('supertest');
const app = require('../server');

describe('GET /health', () => {
  it('returns 200 JSON with standardized success response shape', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).toHaveProperty('ok', true);
    expect(response.body).toHaveProperty('requestId');
    expect(response.body).toHaveProperty('data');
    expect(typeof response.body.requestId).toBe('string');
    expect(response.body.data).toHaveProperty('ok', true);
    expect(response.headers['x-request-id']).toBe(response.body.requestId);
  });
});

