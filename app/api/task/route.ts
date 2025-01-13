import { NextResponse } from "next/server";

type Props = {
  id: string;
  title: string;
  description: string;
};

const task: Props[] = [];

export async function GET() {
  return NextResponse.json(task);
}

export async function POST(reques: Request) {
  const body = await reques.json();
  if (!body.title || !body.description) {
    return NextResponse.json({
      error: "titulo y description son obligatorios",
    });
  }

  return NextResponse.json(body);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, title, description } = body;

  const taskIndex = task.findIndex((task) => task.id === id);

  /*   if (taskIndex === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  } */

  task[taskIndex] = {
    ...task[taskIndex],
    title: title,
    description: description,
  };

  return NextResponse.json(task[taskIndex]);
}
