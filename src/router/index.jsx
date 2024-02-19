import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import NotFoundPage from "../pages/notFoundPage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import SettingsPage from "../pages/settingsPage";
import { BASE_URL } from "../utils/constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      {customRoute("", LoginPage, false)}
      {customRoute("home", DashboardPage, true)}
    </Routes>
  );
};

function customRoute(path, Page, isProtected) {
  const page = isProtected ? (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  ) : (
    <PublicRoute>
      <Page />
    </PublicRoute>
  );

  return <Route path={`${BASE_URL}${path}`} element={page} />;
}

export default AppRoutes;
