import cakeReducer from "../src/features/cake/cakeSlice";
import { configureStore } from "@reduxjs/toolkit";
import icecreamReducer from "../src/features/icecream/iceCreamSlice";
import userReducer from "../src/features/users/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;
