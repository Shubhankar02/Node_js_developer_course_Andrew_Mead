const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('Should return hello world', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello World!')
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('Should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Shubhankar',
                        age: 21
                    });
                })
                .end(done);
        });
    });

});