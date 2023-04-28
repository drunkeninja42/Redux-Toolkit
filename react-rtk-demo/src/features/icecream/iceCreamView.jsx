import { ordered, restocked } from "./iceCreamSlice";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIcecreams);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams-{numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice creams</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      ></input>
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};

export default IceCreamView;
