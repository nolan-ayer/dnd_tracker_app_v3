import HeaderMain from "./Header/HeaderMain";

const Layout = (props) => {
  return (
    <>
      <HeaderMain />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
