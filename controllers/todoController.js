import { todoModel } from "../models/index.js"

export default {
  create,
  get
}

async function create(req, res) {
  const record = req.body
  await todoModel.create(record)
  res.json({ status: 'ok' })
} 
async function get(req, res) {
  const todos = await todoModel.find()
  res.json(todos)
} 