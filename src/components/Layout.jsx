import Sidebar from "./dashboard-module/Sidebar";
import PropTypes from "prop-types";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      {children}
    </section>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

