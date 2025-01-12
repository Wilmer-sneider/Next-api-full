// extension rag

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hola: "mundo de nuevo",
  });
}

export async function POST() {
  return NextResponse.json({
    USER: "wilmer sneider",
  });
}
