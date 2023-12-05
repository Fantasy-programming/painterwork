"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { publicUrl } from "@utils/env";

interface PostData {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
}

// TODO: Refactor the whole gallery, it's a mess
// TODO: Make the search bar work

const deleteImag = async (id: string): Promise<any> => {
  try {
    const res = await fetch(`${publicUrl}/api/images/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (e) {
    console.log(e);
    throw new Error("Error deleting image");
  }
};

const GetPosts: React.FC<{ data: PostData[] }> = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <div className="grid container grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {data?.map((item: PostData, index: number) => (
          <div
            key={index}
            className="border bg-base-100 shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <div className="rounded-t-lg relative w-full h-[200px]">
              <Image
                fill={true}
                src={`${publicUrl}/api/images/${item.imageUrl}`}
                alt={item.name}
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>
            <div className="flex bg-base-100 text-gray-700 flex-col px-2 gap-2 py-4">
              <p className="font-bold leading-3">{item.name}</p>
              <p className="font-bold">{item.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={async () => {
                    await deleteImag(item._id);
                    router.refresh();
                  }}
                >
                  <span className="bg-red-500 text-white p-1 rounded-md">
                    delete
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetPosts;
