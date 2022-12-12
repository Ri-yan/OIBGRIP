import { Navigate } from "react-router-dom"
import { useApp } from "../../context/context";
export default function PrivateRoute({ children }) {
  const {  auth } = useApp()
  return auth.token ? children : <Navigate to="/login" replace />;
}
