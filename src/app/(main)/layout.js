import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <BreakingNews />
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
