import React from "react";
import Form from "./Form";

function page() {
  return (
    <div className="hero min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <Form />
      </div>
    </div>
  );
}

export default page;
