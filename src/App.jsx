import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TambahData from "./pages/TambahData";
import Activity from "./pages/Activity";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tambah-data" element={<TambahData />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </>
  );
}

export default App;
