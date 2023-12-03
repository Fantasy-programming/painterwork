import React from "react";

const Color = () => {
  return (
    <div className="card w-36 bg-base-100 shadow-xl">
      <figure>
        <div className="bg-primary h-28 w-full"></div>
      </figure>
      <div className="card-body p-1">
        <h2 className="card-title justify-center text-sm">Colorname</h2>
      </div>
    </div>
  );
};

const Colors = () => {
  return (
    <section className=" bg-base-100 p-10 md:px-20 md:py-48" id="colors">
      <h2 className="text-2xl md:text-4xl text-center font-semibold mb-10">
        We have a wide range of colors covering for all your needs
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-10">
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </div>
    </section>
  );
};

export default Colors;
