import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setComponent }) => {
    const navigate = useNavigate();
    const [userData, setData] = useState({
        email: '',
        phonenumber: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        localStorage.removeItem("user")
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://loclhost:5000/users/login", userData)
            localStorage.setItem("user", JSON.stringify({ ...result.data.user, token: result.data.token }))
            navigate('/dashboard')
        } catch (err) {
            alert(err.respond.data.msg)
        }
    }
    return (


        <div className="forms shadow-lg rounded-4  p-4 mt-4">
            <div className="form-content mx-auto">
                <div className="login-form">
                    <div className="title d-flex justify-content-center">Login</div>
                    <div className="input-boxes">
                        <div className="input-box">
                            <label className="title">Email/Mobile</label>
                            <input className="px-3" type="email" placeholder="John@gmail.com" required value={userData.email} name="email" onChange={handleChange} />
                        </div>
                        <div className="input-box mt-5">
                            <label className="title mt-2">Password</label>
                            <input className="px-3" type="password" placeholder="123123" required value={userData.password} name="password" onChange={handleChange} />
                        </div>
                        <div className="button input-box mt-5">
                         <button type="submit" onClick={onSubmit}>Login</button>
                        </div>

                        <div className="text sign-up-text d-flex justify-content-center">Not a member?  <div onClick={() => setComponent("signUp")}><label for="flip">SignUp</label>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;