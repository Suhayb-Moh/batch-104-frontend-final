import "./App.css";
import { useState } from "react";
import { userContext } from "./Utils/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import PageNotFound from "./Pages/PageNotFound";
import Signup from "./Pages/Signup";
import CarOverView from "./Pages/CarOverView";
import CarRegistration from "./Pages/Admin/CarRegistration";
import ViewCarList from "./Pages/Admin/ViewCarsList";
import Categories from "./Pages/Admin/Categories";
import AddCategory from "./Pages/Admin/AddCategory";
import BrowsCategories from "./Pages/BrowseCategories";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={(user, setUser)}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updatepassword" element={<ChangePassword />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/caroverview/:id" element={<CarOverView />} />
          <Route path="/admin/dashboard" element={<ViewCarList />} />
          <Route
            path="admin/carregistration"
            element={<CarRegistration />}
          />{" "}
          <Route path="/profile" element={<Profile />} />
          <Route
            path="admin/carregistration/edit/:id"
            element={<CarRegistration />}
          />
          <Route path="admin/addcategory" element={<AddCategory />} />
          <Route path="admin/viewcars" element={<ViewCarList />} />
          <Route path="admin/categories" element={<Categories />} />
          <Route path="/browsecategories/:id" element={<BrowsCategories />} />
          <Route
            path="admin/carregistration/:id"
            element={<CarRegistration />}
          />
          <Route path="/*" element={<PageNotFound />} />
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
    </userContext.Provider>
  );
}

export default App;
