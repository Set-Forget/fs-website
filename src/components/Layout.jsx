import PropTypes from "prop-types";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex flex-col h-full">
      <Navbar />
      {children}
    </section>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

