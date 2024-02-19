import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const { access_token: isAuthenticated } = user;

  if (isAuthenticated) return <Navigate to="/home" replace />;

  return <>{children}</>;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default PublicRoute;
