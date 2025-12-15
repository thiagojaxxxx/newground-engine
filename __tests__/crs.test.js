const request = require('supertest');
const app = require('../server');

describe('POST /crs/calculate', () => {
  it('with {} returns 200 JSON with standardized success response shape', async () => {
    const response = await request(app)
      .post('/crs/calculate')
      .send({})
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).toHaveProperty('ok', true);
    expect(response.body).toHaveProperty('requestId');
    expect(response.body).toHaveProperty('data');
    expect(typeof response.body.requestId).toBe('string');
    expect(response.headers['x-request-id']).toBe(response.body.requestId);
    
    expect(response.body.data).toHaveProperty('result');
    expect(response.body.data).toHaveProperty('reasons');
    expect(response.body.data).toHaveProperty('assumptions');
    expect(response.body.data).toHaveProperty('ruleVersion');
    expect(response.body.data.result).toHaveProperty('score', 0);
    expect(Array.isArray(response.body.data.reasons)).toBe(true);
    expect(Array.isArray(response.body.data.assumptions)).toBe(true);
    expect(response.body.data.ruleVersion).toBe('v0');
  });
});

