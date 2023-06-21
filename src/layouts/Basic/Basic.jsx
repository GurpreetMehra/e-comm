import Proptypes from "prop-types";
import { TopBar, Header, Footer, SnackBar } from "../../components";

const Basic = ({ children }) => {
  return (
    <>
      <TopBar />
      <Header />
      <SnackBar />
      {children}
      <Footer />
    </>
  );
};

Basic.propTypes = {
  children: Proptypes.any,
};

export default Basic;
