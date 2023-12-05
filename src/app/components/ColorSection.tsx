import React from "react";
import Link from "next/link";

type ColorData = {
  _id: string;
  name: string;
  hexCode: string;
};

type ColorSectionProps = {
  data: ColorData[];
};

type ColorsProps = {
  data: ColorData[];
  limit?: number | null;
  more: boolean;
};

export const Color = ({ name = "Colorname", code = "", more = false }) => {
  if (more) {
    return (
      <Link href="/more-color" className="card w-36 bg-base-100 shadow-xl hover:scale-105 duration-300">
        <figure>
          <div className="bg-primary h-28 w-full"></div>
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
        <div className="h-28 w-full" style={style}></div>
      </figure>
      <div className="card-body p-1">
        <h2 className="card-title text-slate-700 justify-center text-sm">{name}</h2>
      </div>
    </div>
  );
};

const ColorSection = ({ data }: ColorSectionProps) => {
  return (
    <section className=" bg-base-100 p-10 md:px-20 md:py-48" id="colors">
      <h2 className="text-2xl md:text-4xl text-center font-semibold mb-10">
        We have a wide range of colors covering for all your needs
      </h2>
      <Colors limit={7} data={data} more={true} />
    </section>
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

export default ColorSection;
