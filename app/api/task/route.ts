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
