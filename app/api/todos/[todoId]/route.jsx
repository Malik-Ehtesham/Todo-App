import { NextResponse } from "next/server";

import Todo from "@app/models/Todo";
import { connectToDB } from "@app/utils/database";

// UPDATING TODO
export async function PATCH(req, res) {
  try {
    await connectToDB();

    const body = await req.json();

    const todo = await Todo.findById(res.params.todoId);

    if (!todo) {
      return NextResponse.json({ message: "Can't find TODO" });
    }

    if (body.completed !== undefined) {
      // Only update the 'completed' property if it is defined in the request.
      todo.completed = body.completed;
    }

    await todo.save({ validateBeforeSave: false });

    setTimeout(async () => {
      await Todo.findByIdAndDelete(res.params.todoId);
    }, 12 * 60 * 60 * 1000); // 12 hours in milliseconds

    return NextResponse.json({
      data: todo,
      status: "Success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}

// DELETING TODO
export async function DELETE(req, res) {
  try {
    await connectToDB();

    await Todo.findByIdAndDelete(res.params.todoId);

    return NextResponse.json({
      data: {},
      status: "Success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
