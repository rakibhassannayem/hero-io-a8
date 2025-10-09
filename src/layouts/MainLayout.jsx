import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <div className="my-5 container mx-auto px-3">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer autoClose={1000} position="top-center" />
    </div>
  );
};

export default MainLayout;
