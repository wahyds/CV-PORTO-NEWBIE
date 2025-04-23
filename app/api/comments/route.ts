import { NextResponse } from 'next/server';

let comments: { name: string; comment: string }[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, comment } = body;

    if (!name || !comment) {
      return NextResponse.json({ error: 'Name and comment are required' }, { status: 400 });
    }

    comments.push({ name, comment });

    return NextResponse.json({ message: 'Comment added successfully' });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(comments);
}
