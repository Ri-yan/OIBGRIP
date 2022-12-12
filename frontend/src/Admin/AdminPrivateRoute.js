import { Navigate } from "react-router-dom"
import { useApp } from "../context/context";
export default function AdminPrivateRoute({ children }) {
  const {  adminAuth } = useApp()
  return adminAuth.token ? children : <Navigate to="/admin/login" replace />;
}
