import Image from "next/image";
import React from "react";

interface PostData {
  _id: string;
  name: string;
  imageUrl: string;
}

interface PictureProps {
  imgUrl: string;
  alt?: string;
  //   description: string;
}

const Picture: React.FC<PictureProps> = ({ imgUrl, alt = "cool" }) => {
  return (
    <>
      <div className="card w-72 h-96 rounded-none ">
        <figure>
          <Image src={imgUrl} alt={alt} fill={true} style={{ objectFit: "cover" }} />
        </figure>
      </div>
    </>
  );
};

const Gallery: React.FC<{ data: PostData[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-3  ">
      {data?.map((item: PostData, index: number) => (
        <Picture key={index} imgUrl={`http://localhost:3000/api/images/${item.imageUrl}`} alt={item.name} />
      ))}
    </div>
  );
};

export default Gallery;
