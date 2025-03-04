import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Homes from "./pages/Homes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About_us from "./pages/About_us";
import Contact_us from "./pages/Contact_us";
import Terms_Conditions from "./pages/Terms_Conditions";
import Choose_Level from "./pages/Levels/Choose_Level";
import For_Teachers from "./pages/For_Teachers";
import Partner_Form from "./pages/Partner_Form";
import Login from "./pages/Login";
import Tests from "./pages/Levels/Tests";
import Profile from "./pages/Users/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/contact-us" element={<Contact_us />} />
        <Route path="/terms-and-conditions" element={<Terms_Conditions />} />
        <Route path="/choose-level" element={<Choose_Level />} />
        <Route path="/for-teachers" element={<For_Teachers />} />
        <Route path="/partner-explore" element={<Partner_Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tests/level/:level_no" element={<Tests />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
