import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../App.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
