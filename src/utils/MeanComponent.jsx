import React from "react";

const MeanComponent = ({ data, alcoholValue }) => {
  // console.log("mean data: ", data);
  const mean =
    data.reduce((accumulator, value) => accumulator + parseFloat(value), 0) /
    data.length;

  return (
    <div className={alcoholValue}>
      <p>{mean.toFixed(3)}</p>
    </div>
  );
};

export default MeanComponent;
