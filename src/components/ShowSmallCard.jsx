import React, { useContext } from "react";
import SingleSmallCard from "./SingleSmallCard";
import { DataContext } from "../store/DataContext";

const ShowSmallCard = () => {
  const dataContext = useContext(DataContext);
  const cards = dataContext.smallCardData;
  console.log(cards);
  return (
    <div className="row justify-center my-5">
      {cards.map((card, index) => {
        console.log(card);
        return <SingleSmallCard key={index} {...card} />;
      })}
    </div>
  );
};

export default ShowSmallCard;
