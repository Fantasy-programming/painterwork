import { NextResponse, NextRequest } from "next/server";
import { Readable } from "stream";

import Posts, { IPosts } from "@utils/posts";
import connectToDb from "@utils/connectDB";

export const revalidate = 0;

export const POST = async (req: NextRequest) => {
  try {
    const { client, bucket } = await connectToDb();

    let name: string | undefined;
    let image: string | undefined;

    const formData = await req.formData();

    const entries = Array.from(formData.entries());

    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];

      if (key === "name") {
        name = value as string;
      }

      if (typeof value == "object" && value instanceof File) {
        image = `${Date.now()}_${value.name ?? "image"}`;

        const buffer = Buffer.from(await value.arrayBuffer());
        const stream = Readable.from(buffer);
        const uploadStream = bucket.openUploadStream(image, {});
        await stream.pipe(uploadStream);
      }
    }

    if (!name || !image) {
      throw new Error("Name or image not provided");
    }

    const newItem: IPosts = new Posts({
      name,
      imageUrl: image,
    });

    await newItem.save();

    return NextResponse.json({ msg: "ok" });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.error();
  }
};

export const GET = async () => {
  try {
    const { client, bucket } = await connectToDb();
    const posts: IPosts[] = await Posts.find({});
    return NextResponse.json(posts);
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.error();
  }
};
