import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <div className="my-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
