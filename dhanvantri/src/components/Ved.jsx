import React, { useState } from "react";

const Ved = () => {
  const [number, setNumber] = useState(0); // Store the input value
  const [result, setResult] = useState(null); // Store the square result

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the number to the backend
    const response = await fetch("http://127.0.0.1:5000/api/square", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: parseInt(number) }),
    });

    // Get the response and update the result state
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <>
      <div className="w-full lg:mt-[6.7rem] py-3 text-6xl font-bold flex justify-center text-center ">
        <h1 className="text-7xl font-extrabold gradient-text">Ved</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)} // Update number on input change
        />
        <button type="submit">Calculate</button>
      </form>
      <div>Answer: {result !== null ? result : "No result yet"}</div>{" "}
      {/* Display the result */}
    </>
  );
};

export default Ved;
