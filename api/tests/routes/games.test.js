const { app } = require('../../app')
const request = require('supertest')

describe('GET /:id', () => {
  it('should have title', (done) => {
    request(app)
      .get('/games/1')
      .expect((res) => {
        expect(res.body.game).toHaveProperty('title')
      })
      .expect(200, done)
  })
})
