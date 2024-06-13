import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/common";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden min-h-[50vh]">
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
