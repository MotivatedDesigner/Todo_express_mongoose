import { todoModel } from "../models/index.js"

export default {
  create,
  get,
  patch
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
async function patch(req, res) {
  const { id, ...data } = req.body
  const result = await todoModel.findByIdAndUpdate(id, data)
  res.json(result)
} 