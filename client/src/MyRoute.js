import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import FormComponent from './Components/FormComponent'
import SingleComponent from './Components/SingleComponent'
import EditComponent from './Components/EditComponent'
import LogInComponent from './Components/LogInCoponent'
const MyRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exac element={<App />} />
                <Route path="/create" exac element={<FormComponent/>} />
                <Route path="/blog/:slug" exac element={<SingleComponent/>} />
                <Route path="/blog/edit/:slug" exac element={<EditComponent/>} />
                <Route path="/login" exac element={<LogInComponent/>} />

            </Routes>
        </BrowserRouter>
    )
}
export default MyRoute