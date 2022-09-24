import { useLocation } from "react-router-dom"
import NavbarComponent from "./NavbarComponent"


const SingleComponent = () => {
    const location = useLocation()
    
    return (
        <div className="container p-5">
            <NavbarComponent />
            <h1>{location.state.blog.title}</h1>
            <p>{location.state.blog.content.substring(0,300)}</p>
            <p className="text-muted">ผู้เขียน:{location.state.blog.author} , เผยแพร่: {new Date(location.state.blog.createdAt).toLocaleString()}</p>
        </div>
    )
}

export default SingleComponent