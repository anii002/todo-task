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
            await axios.post("http://localhost:5000/users/signup", input)
            setComponent('login')
        } catch (err) {
            alert(err.response.data.msg);
        }

    }
    return (
        <>
            <div class="forms shadow-lg rounded-4  p-4 mt-4">
                <div class="form-content mx-auto">
                    <div class="signup-form">
                        <div class="title d-flex justify-content-center">Signup</div>
                        <div class="input-boxes">
                            <div class="input-box">
                                <label className="title">Full Name</label>
                                <input className="px-3" type="text" placeholder="John" value={input.fullname} name="fullname" required onChange={handleChange} />
                            </div>
                            <div class="input-box mt-5">
                                <label className="title">Father Name</label>
                                <input className="px-3" type="text" placeholder="Doe" value={input.fathername} name="fathername" required onChange={handleChange} />
                            </div>
                            <div class="input-box mt-5">
                                <label className="title">Email</label>
                                <input className="px-3" type="text" placeholder="Doe" value={input.email} name="email" required onChange={handleChange} />
                            </div>
                            <div class="input-box mt-5">
                                <label className="title">Phone Number:</label>
                                <div className="d-flex">
                                    <input className="phone px-2" placeholder="+91" />
                                    <input className="px-3 phone-input mx-2" type="phonenumber" placeholder=" 8924988216" value={input.phonenumber} name="phonenumber" required onChange={handleChange} /></div>
                            </div>
                            <div class="input-box mt-5">
                                <label className="title">Password</label>
                                <input className="px-3" type="password" placeholder="password" value={input.password} name="password" required onChange={handleChange} />
                            </div>
                            <div class="button input-box mt-5">
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                            </div>
                            <div class="text sign-up-text d-flex justify-content-center">Already have an account?<div onClick={() => setComponent("login")}> <label for="flip">Login
                                now</label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;