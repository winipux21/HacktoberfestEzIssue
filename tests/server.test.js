import request from 'supertest'
import app from '../server/index.js'

describe('server basics', () => {
  it('GET /api/ping should return ok', async () => {
    const res = await request(app).get('/api/ping')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
  })

  it('GET /api/unknown should be 404', async () => {

    const res = await request(app).get('/api/unknown')
    expect(res.status).toBe(404)
  })
})


