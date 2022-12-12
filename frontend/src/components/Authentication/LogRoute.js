import { Navigate } from "react-router-dom"
import { useApp } from "../../context/context";
export default function LogRoute({ children }) {
  const { auth } = useApp()
  return !auth.token ? children : <Navigate to="/" replace />;
}
