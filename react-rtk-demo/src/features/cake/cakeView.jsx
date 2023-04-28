import { ordered, restocked } from "./cakeSlice";
import { useDispatch, useSelector } from "react-redux";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes-{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(1))}>Restock Cake</button>
    </div>
  );
};

export default CakeView;
