import { useState, useEffect } from "react";
import Cars from "./components/carshop/Cars";

export default function App() {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState([]);

  const handleDelete = (index) => {
    setData((prevData) => {
      const newData = prevData.filter((_, i) => i !== index);
      localStorage.setItem("carData", JSON.stringify(newData));
      return newData;
    });
  };
  useEffect(() => {
    const storedData = localStorage.getItem("carData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carData", JSON.stringify(data));
  }, [data]);

  const carName = (e) => setName(e.target.value);
  const carSpeed = (e) => setSpeed(e.target.value);
  const carPrice = (e) => setPrice(e.target.value);
  const carLink = (e) => setLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const carDetails = {
      name,
      speed,
      price,
      link,
      id: Math.floor(Math.random() * 9999999),
    };
    setData((prevData) => [...prevData, carDetails]);

    setName("");
    setSpeed("");
    setPrice("");
    setLink("");
  };

  return (
    <>
      <Cars
        handleSubmit={handleSubmit}
        carName={carName}
        carSpeed={carSpeed}
        carPrice={carPrice}
        carLink={carLink}
        name={name}
        speed={speed}
        price={price}
        link={link}
        data={data}
        handleDelete={handleDelete}
      />
    </>
  );
}
