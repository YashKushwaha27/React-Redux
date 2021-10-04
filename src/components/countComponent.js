import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { decreaseValue, increaseValue } from "../redux/actions/countActions";

const CountComponent = () => {
  const value = useSelector((val) => val.value.count);

  const dispath = useDispatch();

  const inc = () => {
    dispath(increaseValue(1));
  };

  const dec = () => {
    dispath(decreaseValue(-1));
  };

  return (
    <div>
      <h1>Count: {value} </h1>
      <div>
        <button onClick={() => inc()}> + 1 </button>
        <button onClick={() => dec()}> - 1 </button>
      </div>
    </div>
  );
};

export default CountComponent;
