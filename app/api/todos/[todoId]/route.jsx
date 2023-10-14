import Todo from "@app/models/Todo";
import { connectToDB } from "@app/utils/database";
import { NextRequest, NextResponse } from "next/server";

// UPDATING TODO
export async function PATCH(req) {
  try {
    await connectToDB();

    const body = await req.json();

    const todo = await Todo.findById(body.id);

    if (body.task !== "") {
      todo.task = body.task;
    }

    if (body.completed !== "") {
      todo.completed = body.completed;
    }

    await todo.save({ validateBeforeSave: false });

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
