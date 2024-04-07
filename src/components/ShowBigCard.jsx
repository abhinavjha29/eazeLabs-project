import React, { useContext } from "react";
import SingleBigCard from "./SingleBigCard";
import { DataContext } from "../store/DataContext";

const ShowBigCard = () => {
  const dataContext = useContext(DataContext);
  const cardsData = dataContext.bigCardData;

  return (
    <div className="row justify-center my-7">
      {cardsData.map((data, index) => (
        <SingleBigCard key={index} data={data} />
      ))}
    </div>
  );
};

export default ShowBigCard;
