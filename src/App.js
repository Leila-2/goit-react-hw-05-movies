import "./App.css";
import { Home } from "./views/Home";
import {
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
