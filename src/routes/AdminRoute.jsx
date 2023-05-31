import React from "react";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoute = () => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="w-screen min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }
  if (user && isAdmin) {
    return <Outlet />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
