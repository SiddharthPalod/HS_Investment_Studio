import { Route, Routes } from "react-router-dom";
import About from "./About";
import AboutWithTitle from "./AboutWithTitle";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/:title" element={<AboutWithTitle />} />
      </Routes>
  );
};

export default AppRouter