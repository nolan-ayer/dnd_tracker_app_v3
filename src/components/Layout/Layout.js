import HeaderMain from "./Header/HeaderMain";

const Layout = (props) => {
  return (
    <>
      <HeaderMain />
      <main className="mainContent">{props.children}</main>
    </>
  );
};

export default Layout;
