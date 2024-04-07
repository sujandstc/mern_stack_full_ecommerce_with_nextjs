import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
