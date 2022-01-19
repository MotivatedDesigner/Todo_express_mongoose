import { todoModel } from "../models/index.js"

export default {
  create,
  get,
  patch,
  remove
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
async function remove(req, res) {
  const id = req.params.id
  console.log(id);
  const result = await todoModel.findByIdAndRemove(id)
  res.json(result)
} 