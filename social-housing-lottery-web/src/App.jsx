import './App.css';
import Home from "@/home/Home.jsx";
import Auth from "@/Authorize/RegisterOrLogin/RegisterOrLogin.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from "@/service/authenticationCheck/PrivateRoute.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                {/* Nếu bạn muốn thêm trang Home */}
                <Route path="/" exact element={<PrivateRoute element={<Home />} />} />
            </Routes>
        </Router>
    );
}

export default App;
