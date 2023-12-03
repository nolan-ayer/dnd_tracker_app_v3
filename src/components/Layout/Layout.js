import Footer from "./Footer/Footer";
import HeaderMain from "./Header/HeaderMain";

const Layout = (props) => {
  return (
    <>
      <HeaderMain />
      <main className="mainContent">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
