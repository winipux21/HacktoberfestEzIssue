import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const PORT = process.env.PORT || '3000'

const app = express()
app.use(cors({ origin: true }))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/static', express.static(path.join(__dirname, '..', 'public')))

app.get('/api/ping', (_req, res) => {
  res.json({ ok: true, time: Date.now() })
})

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    res.status(200).json({ error: 'Not Found' })
    return
  }
  res.status(404).send('Not Found')
})

app.listen(Number(PORT), () => {

  console.log(`Server started on http://localhost:${PORT} `)
})

export default app


