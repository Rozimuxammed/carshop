import React from "react";
import { MdDelete } from "react-icons/md";

function Cars({
  handleSubmit,
  carName,
  carSpeed,
  carPrice,
  carLink,
  name,
  speed,
  price,
  link,
  data,
  handleDelete,
}) {
  return (
    <div className="flex">
      <div className="w-[30%] h-[100vh] bg-[#515151] fixed pt-14">
        <form onSubmit={handleSubmit} className="w-full px-6 leading-10">
          <label className="text-xl text-white" id="car-name">
            Car name: <br />
            <input
              onChange={carName}
              value={name}
              className="w-full outline-none rounded-lg p-5 h-10 bg-transparent text-white border-2 border-white mb-5 text-lg"
              type="text"
              name="car-name"
              placeholder="Car name"
            />
          </label>
          <label className="text-xl text-white" id="speed">
            Speed: <br />
            <input
              onChange={carSpeed}
              value={speed}
              className="w-full outline-none rounded-lg p-5 h-10 bg-transparent text-white border-2 border-white mb-5 text-lg"
              type="text"
              name="speed"
              placeholder="Speed"
            />
          </label>
          <label className="text-xl text-white" id="price">
            Price $: <br />
            <input
              onChange={carPrice}
              value={price}
              className="w-full outline-none rounded-lg p-5 h-10 bg-transparent text-white border-2 border-white mb-5 text-lg"
              type="number"
              name="price"
              placeholder="Price"
            />
          </label>
          <label className="text-xl text-white" id="img-url">
            Image URL : <br />
            <input
              onChange={carLink}
              value={link}
              className="w-full outline-none rounded-lg p-5 h-10 bg-transparent text-white border-2 border-white mb-5 text-lg"
              type="text"
              name="img-url"
              placeholder="Image URL"
            />
          </label>
          <button className="border-2 border-white px-16 uppercase py-2 rounded-lg text-white text-xl mt-5 hover:bg-white hover:text-black transition-all duration-300">
            Add car
          </button>
        </form>
      </div>
      <div className="w-[70%] h-screen bg-white overflow-scroll ml-auto pt-14 px-7 flex flex-wrap items-star gap-6 justify-evenly">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[300px] h-[400px] shadow-md rounded-lg mb-10"
            >
              <img
                className="w-full h-[65%] object-cover rounded-md"
                src={item.link}
                alt=""
              />
              <div className="w-full h-[35%] px-5">
                <h1 className="text-3xl font-bold mb-3 mt-3 flex items-center justify-between">
                  {item.name}{" "}
                  <span className="text-3xl text-red-800 cursor-pointer">
                    <MdDelete onClick={()=>handleDelete(index)} />
                  </span>
                </h1>
                <p className="text-xl mb-5">
                  <span className="font-bold">Speed:</span> {item.speed} km/h
                </p>
                <p className="text-xl">
                  <span className="font-bold">Price:</span> {item.price}$
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cars;
