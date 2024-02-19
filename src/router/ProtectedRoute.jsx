import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const { access_token: isAuthenticated } = user;
  const location = useLocation();

  if (!isAuthenticated)
    return <Navigate to="/" state={{ from: location }} replace />;

  return <Layout>{children}</Layout>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
