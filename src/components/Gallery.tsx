import Image from 'next/image';
import { url } from '@/lib/env';

interface PostData {
  _id: string;
  name: string;
  imageUrl: string;
}

interface PictureProps {
  imgUrl: string;
  alt?: string;
  description?: string;
}

const Picture: React.FC<PictureProps> = ({ imgUrl, alt = 'cool' }) => {
  return (
    <>
      <div className="card w-32 h-48 md:w-60 md:h-72 lg:w-72 lg:h-96 rounded-none ">
        <figure className="relative w-full h-full">
          <Image
            src={imgUrl}
            alt={alt}
            fill={true}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw"
            style={{ objectFit: 'cover' }}
          />
        </figure>
      </div>
    </>
  );
};

const Gallery: React.FC<{ data: PostData[] }> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3 md:gap-x-10 md:gap-y-6  items-center  ">
      {data?.map((item: PostData) => (
        <Picture
          key={item._id}
          imgUrl={`${url}/api/images/${item.imageUrl}`}
          alt={item.name}
        />
      ))}
    </div>
  );
};

export default Gallery;
