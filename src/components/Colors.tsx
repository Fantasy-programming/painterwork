import React from 'react';
import Link from 'next/link';

type ColorData = {
  _id: string;
  name: string;
  hexCode: string;
};

type ColorsProps = {
  data: ColorData[];
  limit?: number | null;
  more: boolean;
};

export const Color = ({ name = 'Colorname', code = '', more = false }) => {
  if (more) {
    return (
      <Link
        href="/more-color"
        className="card w-36 bg-base-100 shadow-xl hover:scale-105 duration-300"
      >
        <figure>
          <div className="bg-primary h-28 w-full" />
        </figure>
        <div className="card-body p-1">
          <h2 className="card-title justify-center text-sm">{name}</h2>
        </div>
      </Link>
    );
  }

  const style = {
    backgroundColor: code,
  };

  return (
    <div className="card w-36 bg-slate-50 shadow-xl hover:scale-105 duration-300">
      <figure>
        <div className="h-28 w-full" style={style} />
      </figure>
      <div className="card-body p-1">
        <h2 className="card-title text-slate-700 justify-center text-sm">
          {name}
        </h2>
      </div>
    </div>
  );
};

export const Colors = ({ data, limit = null, more }: ColorsProps) => {
  const filteredData = data ? (limit ? data.slice(0, limit) : data) : [];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-10">
      {filteredData?.map((item) => (
        <Color key={item._id} name={item.name} code={item.hexCode} />
      ))}
      {more && <Color name="See more" more={true} />}
    </div>
  );
};
