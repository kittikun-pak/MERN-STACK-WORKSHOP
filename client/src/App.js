import NavbarComponent from "./Components/NavbarComponent"
import axios from 'axios'
import {useState,useEffect} from 'react'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import { getUser, getToken } from "./Services/authorize"

function App() {
  const [blogs,setBlogs] = useState({})

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_API}/blogs`)
    .then(response => {
      setBlogs(response.data)
    })
    .catch(err => {
      Swal.fire(
        'แจ้งเตือน',
        err,
        'error'
      )
    })
  }
  useEffect(() => {
    fetchData()
  },[])

  const confirmDelete = (slug) => {
    Swal.fire({
      title: "คุณต้องการลบบทความหรือไม่ ?",
      icon: "warning",
      showCancelButton: true
    })
    .then((result) => {
      if(result.isConfirmed){
        DeleteBlog(slug)  
      }
    })
  }

  const DeleteBlog = (slug) => {
    axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`,
    {
      headers:{
          Authorization:`Bearer ${getToken()}`
      }
  })
    .then(response => {
      Swal.fire("Deleted !",response.data.message,"success")
      fetchData()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>CRUD | MERN-STACK</h1>
      <h1>WRITE ARTICLE WORKSHOP</h1>
      {Array.from(blogs).map((blog,index) => (
        <div className="row" key={index} style={{borderBottom:`1px solid silver`}}>
          <div className="col pt-3 pb-2">
            <Link to={`/blog/${blog.slug}`} state={{ blog: blog }}>
              <h2>{blog.title}</h2>
              </Link>
        
            <div className="pt-3" >{(blog.content.substring(0,300))}</div>

            <p className="text-muted">ผู้เขียน:{blog.author} , เผยแพร่: {new Date(blog.createdAt).toLocaleString()}</p>
            {
              getUser() && (
                <div>
                  <Link to={`/blog/edit/${blog.slug}`} state={{ blog: blog }} className="btn btn-outline-success">แก้ไขบทความ</Link> &nbsp;
                  <button className="btn btn-outline-danger" onClick={() => confirmDelete(blog.slug)}>ลบบทความ</button>
                </div>
              )
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

