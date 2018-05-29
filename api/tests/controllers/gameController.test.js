const { app } = require('../../app')
const request = require('supertest')

describe('GET /:id', () => {
  it('should contain maker, genres and platforms', (done) => {
    request(app)
      .get('/games/1')
      .expect((res) => {
        expect(res.body.game).toHaveProperty('maker')
        expect(res.body.game).toHaveProperty('genres')
        expect(res.body.game).toHaveProperty('platforms')
      })
      .expect(200, done)
  })
})
