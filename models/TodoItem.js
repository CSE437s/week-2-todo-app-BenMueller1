const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  status: {
    type: String,
    enum: ['unstarted', 'in progress', 'completed'],
    default: 'unstarted'
  },
  dueDate: {
    type: Date,
    required: false
  },
  priority: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
    default: 3
  }
});

const TodoItem = mongoose.model('TodoItem', TodoItemSchema);
module.exports = TodoItem;
