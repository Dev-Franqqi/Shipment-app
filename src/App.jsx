import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nbar from "./components/Nbar";
import Vision from "./pages/Vision";
import Contact from "./pages/Contact";
import Air from "./pages/services/Air";
import Contractl from "./pages/services/Contractl";
import Customb from "./pages/services/Customb";
import Doort from "./pages/services/Doort";
import Oceanpage from "./pages/services/Oceanpage";
import Package from "./pages/services/Package";
import Railway from "./pages/services/Railway";
import Trucking from "./pages/services/Trucking";
import Warehousing from "./pages/services/Warehousing";
import Shipment from "./pages/Shipment";

export default function App() {
  return (
    <>
      <Router>
        <Nbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/air" element={<Air />} />
          <Route path="/services/contract" element={<Contractl />} />
          <Route path="/services/custom" element={<Customb />} />
          <Route path="/services/door" element={<Doort />} />
          <Route path="/services/ocean" element={<Oceanpage />} />
          <Route path="/services/package" element={<Package />} />
          <Route path="/services/railway" element={<Railway />} />
          <Route path="/services/trucking" element={<Trucking />} />
          <Route path="/services/warehousing" element={<Warehousing />} />
        </Routes>
      </Router>

      <footer className="bg-gray-200 py-5 px-10 text-center text-gray-700">
        2023 ASAP Prime Logistics | All Rights Reserved.
      </footer>
    </>
  );
}
