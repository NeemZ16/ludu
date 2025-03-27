import { useState } from "react"
import { Link } from 'react-router'
import './account.css'

function Register() {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setFormData(values => ({ ...values, [id]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const submitURL = "/api/register"

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
            <img src="/logo.svg" alt="Ludu Online logo" />
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="conf-password">Confirm Password:</label>
                    <input type="text" id="conf-password" onChange={handleChange}/>
                </div>
                <input type="submit" value="Register" />
                <Link to="/login">Already have an account? Log in</Link>
            </form>
        </div>
    )
}

export default Register
