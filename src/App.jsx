import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Nbar from "./components/Nbar";
import Vision from "./pages/Vision";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
        <Nbar />


        <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
      <Route path='/vision' element={<Vision />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>

      </Router>

      


      
<footer className="bg-gray-200 py-5 px-10 text-center text-gray-700">
  2023 ASAP Prime Logistics | All Rights Reserved.
</footer>

   






    </>
  );
}
