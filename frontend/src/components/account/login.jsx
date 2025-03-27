import { useState } from "react"
import { Link } from 'react-router'
import './account.css'

function Login() {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setFormData(values => ({ ...values, [id]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const submitURL = "/api/login"

        fetch(submitURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

    return (
        <div className="acct-wrapper">
            <Link to="/">
                <img src="/logo.svg" alt="Ludu Online logo" />
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={handleChange}/>
                </div>
                <input type="submit" value="Log In" />
                <Link to="/register">Don't have an account? Register</Link>
                <Link to="/forgot-pwd">Forgot Password</Link>
            </form>
        </div>
    )
}

export default Login
