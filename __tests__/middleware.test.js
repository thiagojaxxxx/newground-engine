const request = require('supertest');
const app = require('../server');

describe('Middleware', () => {
  it('returns 404 with standardized error response shape for unknown routes', async () => {
    const response = await request(app)
      .get('/unknown-route')
      .expect(404)
      .expect('Content-Type', /json/);

    expect(response.body).toHaveProperty('ok', false);
    expect(response.body).toHaveProperty('requestId');
    expect(response.body).toHaveProperty('error');
    expect(typeof response.body.requestId).toBe('string');
    expect(response.body.error).toHaveProperty('code', 'NOT_FOUND');
    expect(response.body.error).toHaveProperty('message');
    expect(response.headers['x-request-id']).toBe(response.body.requestId);
  });

  it('includes requestId in all responses', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.body).toHaveProperty('requestId');
    expect(response.headers['x-request-id']).toBe(response.body.requestId);
  });
});

