import { todoModel } from "../models/index.js"

export default {
  create
}

async function create(req, res) {
  const record = req.body
  await todoModel.create(record)
  res.json({ status: 'ok' })
} 