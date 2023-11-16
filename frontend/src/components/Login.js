import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setComponent }) => {
    const navigate = useNavigate();
    const [Data, setData] = useState({
        email: '',
        phonenumber: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...Data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        localStorage.removeItem("user")
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://loclhost:5000/users/login", Data)
            localStorage.setItem("user", JSON.stringify({ ...result.data.user, token: result.data.token }))
            navigate('/dashboard')
        } catch (err) {
            alert(err.respond.data.msg)
        }
    }
    return (
        <div className="form d-flex justify-content-center">
            <div className="login-form">

                <form>
                    <label>Login</label>
                    <div>
                        <div>email/phonenumber</div>
                        <input type="text" placeholder="+91- 8924988216" value={Data.value} name="phonenumber" required onChange={handleChange} />
                    </div>
                    <div>

                        <div>password</div>
                        <input type="text" placeholder="password" value={Data.value} name="password" required onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-pimary" onClick={onSubmit}>
                            Login
                        </button>

                    </div>
                    <div className="text" onClick={() => setComponent("signup")}> Not a member <label for="flip">Signup</label></div>
                </form>
            </div>
        </div>
    )
}

export default Login;