import express from "express"

const app = express()

app.use(express.json())

app.use('/', express.static('assets'))

app.listen(3333, () => console.log('Server is Up, Port: 3333'))