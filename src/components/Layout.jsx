import PropTypes from "prop-types";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex">
      {children}
    </section>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

