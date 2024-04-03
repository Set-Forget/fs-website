import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import HybridRoute from "./HybridRoute";
import NotFoundPage from "../pages/notFoundPage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import PrivacyPolicyPage from "../pages/privacyPolicyPage";
import { BASE_URL } from "../utils/constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      {customRoute("", LoginPage, "public")}
      {customRoute("home", DashboardPage, "protected")}
      {customRoute("privacyPolicy", PrivacyPolicyPage, "hybrid")}
    </Routes>
  );
};

function customRoute(path, Page, routeType) {
  let page;
  switch (routeType) {
    case "protected":
      page = (
        <ProtectedRoute>
          <Page />
        </ProtectedRoute>
      );
      break;
    case "public":
      page = (
        <PublicRoute>
          <Page />
        </PublicRoute>
      );
      break;
    case "hybrid":
    default:
      page = (
        <HybridRoute>
          <Page />
        </HybridRoute>
      );
  }

  return <Route path={`${BASE_URL}${path}`} element={page} />;
}

export default AppRoutes;
