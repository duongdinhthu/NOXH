import { Navigate } from 'react-router-dom';

function PrivateRoute({ element, ...rest }) {
    // const isAuthenticated = localStorage.getItem('isAuthenticated'); // Kiểm tra trạng thái đăng nhập khi có be

    const isAuthenticated=true;
    return isAuthenticated ? element : <Navigate to="/auth" />; // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
}

export default PrivateRoute;
