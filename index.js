import express from "express"
import mongoose from 'mongoose'
import { todoModel } from './models/index.js'

mongoose.connect('mongodb://localhost/todo')

const app = express()
app.use(express.json())
app.use('/', express.static('assets'))

app.post('/api/create', async (req, res) => {
  todoModel.create(req.body)
  res.json({ status: 'ok' })
})

app.listen(3333, () => console.log('Server is Up, Port: 3333'))