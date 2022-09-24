
const NavbarComponent = () => {
    return (
        <nav>
            <ul className="nav nav-tab">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <a href="/" className="btn btn-outline-primary">หน้าแรก</a>
                </li>
                &nbsp;
                <li className="nav-item pr-3 pt-3 pb-3">
                    <a href="/create" className="btn btn-outline-success">เขียนบทความ</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarComponent