import { Routes, Route } from "react-router-dom";
import App from "../App";
import Demostration from "../pages/Demostration";
import Example from "../pages/Example";

export default function RouterApp() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Example />} />
      </Route>
      <Route path="/demostration" element={<Demostration />} />
    </Routes>
  );
}
