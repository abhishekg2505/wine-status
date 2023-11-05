import React from "react";

const ModeComponent = ({ data, alcoholValue }) => {
  
  const frequencyCount = data.reduce((acc, value) => {
    if (value in acc) {
      acc[parseFloat(value)]++;
    } else {
      acc[parseFloat(value)] = 1;
    }
    return acc;
  }, {});

  // Find the mode(s) with the highest frequency
  let modes = [];
  let maxFrequency = 0;

  for (const value in frequencyCount) {
    if (frequencyCount[value] > maxFrequency) {
      modes = [Number(value).toFixed(3)];
      maxFrequency = frequencyCount[value];
    } else if (frequencyCount[value] === maxFrequency) {
      modes.push(Number(value).toFixed(3));
    }
  }

  return (
    <div className={alcoholValue}>
      <p>{modes.join(", ")}</p>
    </div>
  );
};

export default ModeComponent;
