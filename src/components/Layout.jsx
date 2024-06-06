import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex flex-col h-full">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

