import PropTypes from "prop-types";

const HybridRoute = ({ children }) => {
  return <>{children}</>;
};

HybridRoute.propTypes = {
  children: PropTypes.node,
};

export default HybridRoute;