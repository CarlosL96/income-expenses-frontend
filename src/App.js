import { Provider } from "./Context";
import "normalize.css";
import "./index.css";
import MainComponent from "./Components/MainComponent"

import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Provider>
        <MainComponent />
      </Provider>
    </div>
  );
}

export default App;
