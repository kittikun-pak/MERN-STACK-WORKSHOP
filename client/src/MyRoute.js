import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import FormComponent from './Components/FormComponent'
import SingleComponent from './Components/SingleComponent'
import EditComponent from './Components/EditComponent'
const MyRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exac element={<App />} />
                <Route path="/create" exac element={<FormComponent/>} />
                <Route path="/blog/:slug" exac element={<SingleComponent/>} />
                <Route path="/blog/edit/:slug" exac element={<EditComponent/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default MyRoute