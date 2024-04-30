import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navber/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
