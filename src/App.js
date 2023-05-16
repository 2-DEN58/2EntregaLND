import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Hangar from "./pages/hangar/Hangar";
import Creator from "./pages/creator/Creator";
import Engine from "./pages/engine/Engine";
//import Records from "./pages/records/Records";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hangar />}/>
        <Route path="/creator" element={<Creator />}/>
        <Route path="/engine" element={<Engine />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

        /*<Route path="/records" element={<Records />}/>*/
