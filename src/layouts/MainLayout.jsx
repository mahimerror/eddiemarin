import Footer from "@/components/shared/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="font-montserrat">
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
