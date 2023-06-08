import { Routes, Route } from "react-router-dom";
import App from "../App";
import Demostration from "../pages/Demostration";
import Index from "../pages/Index";
import Login from "../pages/login";
import Store from "../pages/Store";

export default function RouterApp() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Index />} />
       
      </Route>
      <Route path="/register/login" element= {<Login/>} />
      <Route path="/demostration" element={<Demostration />} />
      <Route path="/store" element= {<Store/>} />
    </Routes>
  );
}
