import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import PageNotFound from "./Pages/PageNotFound";
import Signup from "./Pages/Signup";
import CarOverView from "./Pages/CarOverView";
import Dashboard from "./Pages/Admin/Dashboard";
import CarRegistration from "./Pages/CarRegistration";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/caroverview" element={<CarOverView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carregistration" element={<CarRegistration />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
