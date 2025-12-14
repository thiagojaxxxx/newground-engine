const request = require('supertest');
const app = require('../server');

describe('GET /health', () => {
  it('returns 200 JSON and includes the standard response envelope', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).toHaveProperty('result');
    expect(response.body).toHaveProperty('reasons');
    expect(response.body).toHaveProperty('assumptions');
    expect(response.body).toHaveProperty('ruleVersion');
    expect(response.body.result).toHaveProperty('ok', true);
    expect(Array.isArray(response.body.reasons)).toBe(true);
    expect(Array.isArray(response.body.assumptions)).toBe(true);
    expect(response.body.ruleVersion).toBe('v0');
  });
});

