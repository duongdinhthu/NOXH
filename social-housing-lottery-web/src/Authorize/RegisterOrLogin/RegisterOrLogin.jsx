import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './RegisterOrLogin.css';  //
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";
export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // State để điều khiển spinner

    const loginFormik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            setLoading(true); // Bật spinner ngay khi bắt đầu submit
            setTimeout(() => {
                console.log('Login Form Data:', values);
                // Thực hiện API đăng nhập ở đây

                setLoading(false); // Tắt spinner sau khi xong
                navigate('/'); // Điều hướng sau khi đăng nhập thành công
            }, 3000); // Giả lập thời gian xử lý (3 giây)
        },
    });

    const registerFormik = useFormik({
        initialValues: {
            username: '',
            password: '',
            cccd: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
            cccd: Yup.string()
                .length(12, "CCCD phải có 12 ký tự")
                .required("CCCD là bắt buộc"),
        }),
        onSubmit: (values) => {
            setLoading(true); // Bật spinner ngay khi bắt đầu submit
            setTimeout(() => {
                console.log('Login Form Data:', values);
                // Thực hiện API đăng nhập ở đây

                setLoading(false); // Tắt spinner sau khi xong
                navigate('/'); // Điều hướng sau khi đăng nhập thành công
            }, 3000); // Giả lập thời gian xử lý (3 giây)
        },
    });


    return (
        <div className="auth-container">
            <div className="auth-form" >
                {loading && (
                    <div className="form-spinner">
                        <ClipLoader size={60} color="red" />
                    </div>
                )}
                <div className="form-wrapper">
                    <h2>{isLogin ? "Đăng nhập" : "Đăng ký"}</h2>

                    {isLogin ? (
                        <form onSubmit={loginFormik.handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={loginFormik.values.username}
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                    className={loginFormik.errors.username && loginFormik.touched.username ? "error" : ""}
                                />
                                {loginFormik.errors.username && loginFormik.touched.username && (
                                    <div className="error-message">{loginFormik.errors.username}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={loginFormik.values.password}
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                    className={loginFormik.errors.password && loginFormik.touched.password ? "error" : ""}
                                />
                                {loginFormik.errors.password && loginFormik.touched.password && (
                                    <div className="error-message">{loginFormik.errors.password}</div>
                                )}
                            </div>
                            <button type="submit">Đăng nhập</button>
                            <p onClick={() => setIsLogin(false)} className="switch-form"   >Chưa có tài khoản? <span style={{color: "blue",cursor: 'pointer'}}>Đăng ký ngay!</span></p>
                        </form>
                    ) : (
                        <form onSubmit={registerFormik.handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={registerFormik.values.username}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    className={registerFormik.errors.username && registerFormik.touched.username ? "error" : ""}
                                />
                                {registerFormik.errors.username && registerFormik.touched.username && (
                                    <div className="error-message">{registerFormik.errors.username}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={registerFormik.values.password}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    className={registerFormik.errors.password && registerFormik.touched.password ? "error" : ""}
                                />
                                {registerFormik.errors.password && registerFormik.touched.password && (
                                    <div className="error-message">{registerFormik.errors.password}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>CCCD</label>
                                <input
                                    type="text"
                                    name="cccd"
                                    value={registerFormik.values.cccd}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    className={registerFormik.errors.cccd && registerFormik.touched.cccd ? "error" : ""}
                                />
                                {registerFormik.errors.cccd && registerFormik.touched.cccd && (
                                    <div className="error-message">{registerFormik.errors.cccd}</div>
                                )}
                            </div>
                            <button type="submit">Đăng ký</button>
                            <p onClick={() => setIsLogin(true)} className="switch-form">Đã có tài khoản? <span style={{color: "blue",cursor: 'pointer'}}>Đăng nhập ngay!</span></p>
                        </form>
                    )}
                </div>
            </div>

        </div>
    );
}
