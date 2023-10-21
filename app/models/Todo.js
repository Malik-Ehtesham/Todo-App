import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
  task: {
    type: String,
    required: [true, "Task is required. "],
  },
  email: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = models.Todo || model("Todo", TodoSchema);

module.exports = Todo;
