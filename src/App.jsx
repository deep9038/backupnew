import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import NaveBar from "./ComonComponents/naveBar/NaveBar";
import Footer from "./ComonComponents/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUS from "./Pages/ContactUs/ContactUS";
import ServiecePage from "./Pages/Servicespage/ServiecePage";
import PrivesyPolisyPage from "./Pages/PrivesyPolisy/PrivesyPolisyPage";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Blog from "./Pages/Blog/Blog";
function App() {
  return (
    <>
      <BrowserRouter>
       <NaveBar/>
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/about_us" element={<AboutUs />} /> 
          <Route path="/contact_us" element={<ContactUS />} /> 
          <Route path="/services" element={<ServiecePage />} /> 
          <Route path="/privesy_polisy" element={<PrivesyPolisyPage />} /> 
          <Route path="/user" element={<UserProfile />} /> 
          <Route path="/blog" element={<Blog />} /> 
        </Routes>
        <Footer/>
        
      </BrowserRouter>
    </>
  );
}

export default App;
