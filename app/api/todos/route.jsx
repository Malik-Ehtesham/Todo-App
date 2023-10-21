import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { connectToDB } from "@app/utils/database";
import { authOptions } from "../auth/[...nextauth]/route";
import Todo from "@app/models/Todo";

// FOR GETTING ALL TODOS
export async function GET(req, res) {
  try {
    await connectToDB();

    const session = await getServerSession(authOptions);

    const email = session.user.email;

    const allTodos = await Todo.find({ email: email });

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
      email: body.email,
      completed: body.completed,
    });

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
