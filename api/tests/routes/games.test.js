const { app } = require('../../app')
const request = require('supertest')

describe('GET /:id', () => {
  it('should be fine', (done) => {
    request(app)
      .get('/games/1')
      .expect(200, done)
  })
})
