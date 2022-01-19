import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
  record: { type: String, required: true },
  createdAt: { type: Number, default: Date.now() }
})

export default mongoose.model('todoModel', todoSchema)