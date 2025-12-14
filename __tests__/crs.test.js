const request = require('supertest');
const app = require('../server');

describe('POST /crs/calculate', () => {
  it('with {} returns 200 JSON and includes result, reasons, assumptions, ruleVersion', async () => {
    const response = await request(app)
      .post('/crs/calculate')
      .send({})
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).toHaveProperty('result');
    expect(response.body).toHaveProperty('reasons');
    expect(response.body).toHaveProperty('assumptions');
    expect(response.body).toHaveProperty('ruleVersion');
    expect(response.body.result).toHaveProperty('score', 0);
    expect(Array.isArray(response.body.reasons)).toBe(true);
    expect(Array.isArray(response.body.assumptions)).toBe(true);
    expect(response.body.ruleVersion).toBe('v0');
  });
});

