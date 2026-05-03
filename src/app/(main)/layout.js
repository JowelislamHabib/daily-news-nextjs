import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <BreakingNews />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
