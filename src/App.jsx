import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Consultancy from "./pages/Consultancy";
import Internships from "./pages/Internships";
import Training from "./pages/Training";
import About from "./pages/About";
import CareerServices from "./pages/CareerServices";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        <Route
            path="/career-services"
            element={<CareerServices />}
          />
      </Routes>
    </MainLayout>
  );
}

export default App;