import Todo from "@app/models/Todo";
import { connectToDB } from "@app/utils/database";
import { NextRequest, NextResponse } from "next/server";

// FOR GETTING ALL TODOS
export async function GET(req, res) {
  try {
    await connectToDB();

    const allTodos = await Todo.find();

    return NextResponse.json({
      data: allTodos,
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

// FOR CREATING NEW TODO
export async function POST(req, res) {
  try {
    await connectToDB();

    const body = await req.json();

    const todo = await Todo.create({
      task: body.task,
      completed: body.completed,
    });

    console.log(todo);

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
