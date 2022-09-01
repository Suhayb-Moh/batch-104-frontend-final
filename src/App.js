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
import CarRegistration from "./Pages/Admin/CarRegistration";
import ViewCarList from "./Pages/Admin/ViewCarsList";
import Categories from "./Pages/Admin/Categories";
import AddCategory from "./Pages/Admin/AddCategory";
import BrowsCategories from "./Pages/BrowseCategories";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/caroverview/:id" element={<CarOverView />} />
        <Route path="/admin/dashboard" element={<ViewCarList />} />
        <Route path="admin/carregistration" element={<CarRegistration />} />
        <Route path="admin/addcategory" element={<AddCategory />} />
        <Route path="admin/viewcars" element={<ViewCarList />} />
        <Route path="admin/categories" element={<Categories />} />
        <Route path="/browsecategories/:id" element={<BrowsCategories />} />
        <Route path="admin/carregistration/:id" element={<CarRegistration />} />
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
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
