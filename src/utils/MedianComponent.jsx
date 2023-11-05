import React from "react";

const MedianComponent = ({ data, alcoholValue }) => {
  // Sort the data array
  const sortedData = data.slice().sort((a, b) => a - b);

  // Calculate the median
  let median;
  const middle = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    // If the array has an even number of elements, take the average of the middle two values
    median = (sortedData[middle - 1] + sortedData[middle]) / 2;
  } else {
    // If the array has an odd number of elements, the median is the middle value
    median = sortedData[middle];
  }

  return (
    <div className={alcoholValue}>
        <p>{median.toFixed(3)}</p>
    </div>
  );
};

export default MedianComponent;
