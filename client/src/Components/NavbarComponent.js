import {Link, useNavigate} from "react-router-dom"
import { getUser } from "../Services/authorize"

const NavbarComponent = () => {
    return (
        <nav>
            <ul className="nav nav-tab">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/" className="btn btn-outline-primary">หน้าแรก</Link>
                </li>
                &nbsp;
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/create" className="btn btn-outline-success">เขียนบทความ</Link>
                </li>
                &nbsp;
                {
                    !getUser() && (
                        <li className="nav-item pr-3 pt-3 pb-3">
                            <Link to="/login" className="btn btn-outline-info">เข้าสู่ระบบ</Link>
                        </li>)
                }
            </ul>
        </nav>
    )
}

export default NavbarComponent