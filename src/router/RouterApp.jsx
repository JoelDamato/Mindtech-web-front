import { Routes, Route } from "react-router-dom";
import App from "../App";
import Demostration from "../pages/Demostration";
import Index from "../pages/Index";

export default function RouterApp() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Index />} />
      </Route>
      <Route path="/demostration" element={<Demostration />} />
    </Routes>
  );
}
