"use client";

import React, { useState } from "react";

const PriceEstimator = () => {
  const [roomHeight, setRoomHeight] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const paintPrice = 200; // Paint price is unchangeable
  const [numRooms, setNumRooms] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState("0");

  const handleHeightChange = (e) => {
    setRoomHeight(e.target.value);
  };

  const handleWidthChange = (e) => {
    setRoomWidth(e.target.value);
  };

  const handleNumRoomsChange = (e) => {
    setNumRooms(e.target.value);
  };

  const calculatePrice = (): string => {
    const area = Number(roomHeight) * Number(roomWidth);
    const pricePerSquareFoot = paintPrice / (7 * 7); // Assuming 7ft x 7ft area per $200 of paint
    const totalArea = area * Number(numRooms);
    const totalCost = totalArea * pricePerSquareFoot;
    return totalCost.toFixed(2); // Adjust this based on your pricing structure
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculatePrice();
    setEstimatedPrice(totalPrice);
    // You can use totalPrice in further operations (e.g., display to the user)
    console.log(`The estimated price for ${numRooms} rooms is: $${totalPrice}`);
  };

  return (
    <section className="m-20" id="estimator">
      <h2 className="text-4xl text-center font-semibold mb-10">Price Estimation</h2>
      <div className="flex gap-10">
        <div className="w-1/2 card bg-base-100 shadow-2xl max-w-xl shrink-0 ">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="flex gap-5 ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room Height (in feet)</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={roomHeight}
                  onChange={handleHeightChange}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room Width (in feet)</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={roomWidth}
                  onChange={handleWidthChange}
                />
              </label>
            </div>
            <div className="flex gap-5 ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Number of Rooms</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={numRooms}
                  onChange={handleNumRoomsChange}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Paint Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={paintPrice}
                  readOnly // Paint price is unchangeable
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Calculate Price
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <h3 className="text-6xl font-semibold font-mono">{`GH₵${estimatedPrice}`}</h3>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
