import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import Safety from "./Components/Safety";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Career from "./Components/Career";
import FAQ from "./Components/FAQ";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/career" element={<Career />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Chat/> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
