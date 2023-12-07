import { NextResponse, NextRequest } from 'next/server';

import Posts, { IPosts } from '@/models/Post';
import connectToDb from '@/lib/connectDB';

export const revalidate = 0;

export const GET = async (
  _req: NextRequest,
  { params }: { params: { data: string } },
) => {
  try {
    const { bucket } = await connectToDb();
    const { data } = params;

    const files = await bucket
      .find({
        filename: data,
      })
      .toArray();

    if (files.length === 0) {
      return NextResponse.json({ error: 'No file found' }, { status: 500 });
    }

    // the result is an array and i take the first element found
    const file = files[0];

    //reading file using openDownloadStreamByName
    const stream = bucket.openDownloadStreamByName(file.filename) as any;

    return new NextResponse(stream, {
      headers: {
        'Content-Type': file.contentType || 'application/octet-stream',
      },
    });
  } catch (e) {
    console.error('Error:', e);
    return NextResponse.json(
      { error: 'G2-Images: Internal Server Error' },
      { status: 500 },
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { data: string } },
) => {
  const { bucket } = await connectToDb();

  try {
    const { data } = params;
    const deletedPost = (await Posts.findOneAndDelete<IPosts>({
      _id: data,
    })) as unknown as IPosts | null;

    if (!deletedPost || !deletedPost.imageUrl) {
      return NextResponse.error();
    }

    const files = await bucket
      .find({
        filename: deletedPost.imageUrl,
      })
      .toArray();

    const file = files[0];

    bucket.delete(file._id);

    return NextResponse.json({ msg: 'ok' });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: 'D-Images: Internal Server Error' },
      { status: 500 },
    );
  }
};
