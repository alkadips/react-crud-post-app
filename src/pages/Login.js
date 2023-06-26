import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 const Login = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        console.log(email);
        alert('Login Successfully')
        navigate('/dashboard')

        e.preventDefault()
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email"  id="email" name="email" />
                <label htmlFor="password">password</label>
                <input required value={pass} onChange={(e) => setPass(e.target.value)} type="password"  id="password" name="password" />
                <button type="submit">Log In</button>
                <Link to='/signup'>Please sign Up If you don't have an account</Link>

            </form>
        </div>
    )
}
export default Login;