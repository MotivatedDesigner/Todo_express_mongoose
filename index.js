import express from "express"
import mongoose from 'mongoose'
import { todoRouter } from "./routes/index.js"
mongoose.connect('mongodb://localhost/todo')

const app = express()

app.use(express.json())
app.use('/', express.static('assets'))
app.use('/api/todos', todoRouter)

app.listen(3333, () => console.log('Server is Up, Port: 3333'))