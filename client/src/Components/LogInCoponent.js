import NavbarComponent from "./NavbarComponent"
import {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2"
import { authenticate, getUser } from "../Services/authorize"
import {useNavigate} from "react-router-dom"


const LogInComponent = (props) => {

    const navigate = useNavigate()

    const [state,setState] = useState({
        username: "",
        password:""
    })

    const {username, password} = state || {}

    const inputValue = name => event => {
        setState({...state,[name]:event.target.value})
    }
    const submitForm = e => {
        e.preventDefault()
        console.table({username,password})
        axios.post(`${process.env.REACT_APP_API}/login`, {username,password})
        .then(response => {
            authenticate(response, () => navigate("/"))
        })
        .catch(err => {
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
              )
        })
    }

    useEffect(() => {
        getUser() && navigate("/")
        // eslint-disable-next-line
    },[])

    return (
        <div className="container p-5">
            <NavbarComponent />
            <h1>เข้าสู่ระบบ | Admin</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" 
                        value={username} 
                        onChange={inputValue("username")}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                        value={password} 
                        onChange={inputValue("password")}/>
                </div>
                <br/>
                <input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default LogInComponent