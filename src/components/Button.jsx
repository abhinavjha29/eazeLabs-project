import React from "react";

const Button = () => {
  return (
    <div className="row mt-10">
      <div className="col-3 mb-3">
        <button className="rounded-full btn btn-outline-secondary w-full active">
          Create Post +
        </button>
      </div>
      <div className="col-3 mb-3">
        <button className="rounded-full btn btn-outline-secondary w-full">
          Dashboard
        </button>
      </div>
      <div className="col-3 mb-3">
        <button className="rounded-full btn btn-outline-secondary w-full">
          Check Details
        </button>
      </div>
    </div>
  );
};

export default Button;
