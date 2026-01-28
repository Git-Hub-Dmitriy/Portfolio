import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function RequireAuth({ children }) {
  const authorization = useSelector(
    (store) => store.authorization.authorization
  );
  const location = useLocation();

  if (!authorization) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}
