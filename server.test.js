const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return "Hello World" on the main page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });

  it('should fail if "Hello World" is not displayed', async () => {
    const response = await request(app).get('/');
    // This test verifies the response contains "Hello World"
    // It would fail if the response was different
    expect(response.text).toContain('Hello World');
  });
});
