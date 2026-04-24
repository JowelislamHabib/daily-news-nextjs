import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ Children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {Children}
    </>
  );
};

export default MainLayout;
