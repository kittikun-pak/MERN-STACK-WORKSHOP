
import {useState} from 'react'
import NavbarComponent from './NavbarComponent'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import { getToken } from '../Services/authorize'

const EditComponent = () => {
    const location = useLocation()

    const [state,setState] = useState({
        title: location.state.blog.title,
        content: location.state.blog.content,
        author: location.state.blog.author,
        slug:location.state.blog.slug
    }) 
    

    const {title,content ,author, slug} = state || {}

    
    const inputValue = name => event => {
        setState({...state,[name]:event.target.value})
    }


    const submitForm = e => {
        e.preventDefault()
        console.table({title,content,author})
        console.log("API URL ",process.env.REACT_APP_API)
        axios.put(`${process.env.REACT_APP_API}/blog/${slug}`,{title, content, author},
        {
            headers:{
                Authorization:`Bearer ${getToken()}`
            }
        })
        .then(response => {
            const {title,content,author,slug} = response.data
            setState({...state,title, content,author,slug})
            Swal.fire(
                'แจ้งเตือน',
                'แก้ไขข้อมูลบทความเรียบร้อย',
                'success'
              )
        }).catch(err => {
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
              )
        })
    }
    return (
        <div className="container p-5">
            <NavbarComponent />
            <h1>แก้ไขบทความ</h1>
            <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label>ชื่อบทความ</label>
                        <input type="text" className="form-control" 
                            value={title} 
                            onChange={inputValue("title")}/>
                    </div>
                    <div className="form-group">
                        <label>รายละเอียด</label>
                        <textarea className='form-control'
                        value={content}
                        onChange={inputValue("content")}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>ผู้แต่ง</label>
                        <input type="text" className="form-control" 
                            value={author} 
                            onChange={inputValue("author")}/>
                    </div>
                    <br/>
                    <input type="submit" value="แก้ไข" className="btn btn-primary"/>
                </form>
        </div>
    )
}

export default EditComponent