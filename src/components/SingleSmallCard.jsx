import { Sparklines, SparklinesLine } from "react-sparklines";

const SingleSmallCard = ({
  title,
  bigAmount,
  smallAmount1,
  smallAmount2,
  backgroundColor,
}) => {
  const randomData = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 50
  );

  return (
    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
      <div
        className={`card w-18rem ${backgroundColor}`}
        style={{ position: "relative" }}
      >
        <Sparklines
          data={randomData}
          height={120}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <SparklinesLine color="" />
        </Sparklines>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ fontSize: "2rem" }}>
            {bigAmount}
          </p>
          <p className="card-text" style={{ fontSize: "0.8rem" }}>
            {smallAmount1}
          </p>
          <p className="card-text" style={{ fontSize: "0.8rem" }}>
            {smallAmount2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleSmallCard;
