import "./App.css";

import CakeView from "./features/cake/cakeView";
import IceCreamView from "./features/icecream/iceCreamView";
import UserView from "./features/users/userView";

function App() {
  return (
    <>
      <div className="App">
        <UserView />
        <CakeView />
        <IceCreamView />
      </div>
    </>
  );
}

export default App;
