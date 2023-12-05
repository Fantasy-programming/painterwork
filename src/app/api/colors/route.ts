import { NextResponse, NextRequest } from "next/server";

import Color, { IColors } from "@/models/Color";
import connectToDb from "@utils/connectDB";

export const revalidate = 0;

export const POST = async (req: NextRequest) => {
  try {
    await connectToDb();
    const { name, hexCode } = await req.json();

    const newItem: IColors = new Color({
      name,
      hexCode,
    });

    await newItem.save();
    return NextResponse.json({ msg: "ok" });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json(
      { error: "Post: Internal Server Error" },
      { status: 500 },
    );
  }
};

export const GET = async () => {
  try {
    const { client, bucket } = await connectToDb();
    const posts: IColors[] = await Color.find({});
    return NextResponse.json(posts);
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json(
      { error: "Get: Internal Server Error - Colors" },
      { status: 500 },
    );
  }
};
