import axios from "axios";
import { useState } from "react";

const  Signup =  ({setComponent}) => {
    const [input, setInput] = useState({
        fullname: "",
        fathername: "",
        email: "",
        phonenumber: "",
        password: ""
    })

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:500/users/signup", input)
            setComponent('login')
        } catch (err) {
            alert(err.respond.data.msg)
        }

    }
    return (
        <>
            <div className="form d-flex justify-content-center">
                <div className="signup-form">
                    <form>
                        <div className="">
                            <div>fullname</div>
                            <input type="text" placeholder="John" value={input.value} name="name" required onChange={handleChange} />
                        </div>
                        <div>
                            <div>fathername</div>
                            <input type="text" placeholder="Doe" value={input.value} name="fathername" required onChange={handleChange} />
                        </div>
                        <div>
                            
                        <div>email</div>
                        <input type="text" placeholder="Doe" value={input.value} name="email" required onChange={handleChange} />
                        </div>
                        <div>

                        <div>phonenumber</div>
                        <input type="text" placeholder="+91- 8924988216" value={input.value} name="phonenumber" required onChange={handleChange} />
                        </div>
                        <div>

                        <div>password</div>
                        <input type="text" placeholder="password" value={input.value} name="password" required onChange={handleChange} />
                        </div>
                        <div>
                            <button className="btn btn-pimary" onSubmit={handleSubmit}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;