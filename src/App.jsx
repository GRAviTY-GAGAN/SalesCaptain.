import { Route, Routes } from "react-router-dom";
import "./App.css";
import Brands from "./components/Brands";
import Business from "./components/Business";
import BusinessStandOut from "./components/BusinessStandOut";
import Expert from "./components/Expert";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div className="App">
      <div className="App__Navbar">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Brands />
              <Testimonials />
              <Tools />
              <Business />
              <BusinessStandOut />
              <Expert />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
