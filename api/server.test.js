const supertest = require('supertest');

const server = require('./server');
const db = require('../data/db-config');

afterEach(async () => {
  await db('hobbits').truncate();
});

describe('server', () => {
  it('can run the test', () => {
    expect(true).toBeTruthy();
  })

  // describe('GET /', () =>{
  //   it('should return http status code 200 OK', () => {
  //     return supertest(server)
  //       .get('/')
  //       .then(res => {
  //       expect(res.status).toBe(200);
  //     })
  //   })

  //   it('should return {api:up}', () => {
  //     return supertest(server)
  //       .get('/')
  //       .then(res => {
  //         expect(res.body).toEqual({ api: 'up'})
  //         expect(res.body.api).toBeDefined()
  //         expect(res.body.api).toBe('up')
  //       })
  //   })

    
  //   describe('get /hobbits', () => {
  //     it('should return an array', () => {
  //       return supertest(server).get('/hobbits').then(res => {
  //         expect(res.body).toHaveLength(0)
  //       })
  //     })

  //   })
  // })
})