import { getUser } from "./Services/authorize"
import { Navigate } from "react-router-dom"

const AdminRoute = ({ children }) => {
    const isAdmin = getUser()
    return isAdmin ? 
        children : 
        (<Navigate  to="/login" replace />)
}
export default AdminRoute