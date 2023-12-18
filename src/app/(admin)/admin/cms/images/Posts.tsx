'use client';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import imageService, { GalleryElement } from '@/db/imageService';

const Posts: React.FC<{ data: GalleryElement[]; url: string }> = ({
  data,
  url,
}) => {
  const router = useRouter();
  return (
    <div>
      <div className="grid container grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {data?.map((item: GalleryElement) => (
          <div
            key={item._id}
            className="border bg-base-100 shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <div className="rounded-t-lg relative w-full h-[200px]">
              <Image
                fill={true}
                src={`${url}/api/images/${item.imageUrl}`}
                alt={item.name}
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
                priority={true}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw"
              />
            </div>
            <div className="flex bg-base-100 text-gray-700 flex-col px-2 gap-2 py-4">
              <p className="font-bold leading-3">{item.name}</p>
              <p className="font-bold">{item.description}</p>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={async () => {
                    await imageService.deleteOne(item._id, url);
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

export default Posts;
