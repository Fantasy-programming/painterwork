"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  roomHeight: number;
  roomWidth: number;
  numRooms: number;
};

const PriceEstimator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [estimatedPrice, setEstimatedPrice] = useState<string>("0");

  const calculatePrice = ({ roomHeight, roomWidth, numRooms }: FormData): string => {
    const area = roomHeight * roomWidth;
    const paintPrice = 200;
    const pricePerSquareFoot = paintPrice / (7 * 7);
    const totalArea = area * numRooms;
    const totalCost = totalArea * pricePerSquareFoot;
    return totalCost.toFixed(2);
  };

  const onSubmit = (data: FormData) => {
    const totalPrice = calculatePrice(data);
    setEstimatedPrice(totalPrice);
  };

  return (
    <section className="m-10 md:m-20" id="estimator">
      <h2 className="text-4xl text-center font-semibold mb-10">
        Price
        <span className="text-secondary underline decoration-wavy underline-offset-4 decoration-accent">
          Estimation
        </span>
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="w-full md:w-1/2 card bg-base-100 shadow-2xl max-w-xl shrink-0 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex flex-col md:flex-row gap-5 ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room Height (in feet)</span>
                </div>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("roomHeight", { required: true, min: 1 })}
                />
                {errors.roomHeight && <span className="text-error label-text">Please enter a valid height.</span>}
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room Width (in feet)</span>
                </div>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("roomWidth", { required: true, min: 1 })}
                />
                {errors.roomWidth && <span className="text-error label-text">Please enter a valid width.</span>}
              </label>
            </div>
            <div className="flex flex-col md:flex-row  gap-5 ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Number of Rooms</span>
                </div>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("numRooms", { required: true, min: 1 })}
                />
                {errors.numRooms && (
                  <span className="label-text text-error">Please enter a valid number of rooms.</span>
                )}
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Paint Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={200}
                  disabled
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Calculate Price
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 ">
          <h3 className=" text-4xl md:text-6xl font-semibold font-mono">{`GH₵${estimatedPrice}`}</h3>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
