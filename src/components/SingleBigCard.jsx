import React from "react";

const SingleBigCard = ({ data }) => {
  return (
    <div className="card col-4  big-card">
      <ul className="px-6 py-4">
        <div className="justify-content-between d-flex mb-5">
          <h3 className="font-bold">Heading</h3>
          <div className="  w-3 h-3 rounded bg-red-800 "></div>
        </div>
        {data.map((item, index) => (
          <li key={index} className="mb-2 d-flex justify-content-between">
            <div className="mb-1">{item.title}</div>
            <p className="font-bold">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleBigCard;
