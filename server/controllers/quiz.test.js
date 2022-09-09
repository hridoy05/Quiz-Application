const request = require('supertest');
const app = require('../app');
const { mongoConnect, mongoDisconnect } = require('../db/connect');

describe('Test Get /quizes', () => {
    beforeAll(async () => {
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoDisconnect();
    });
    test('It should respond with 200 success', async () => {
        const response = await request(app).get('/api/v1/quizes');
        expect(response.statusCode).toBe(200);
    });
});
