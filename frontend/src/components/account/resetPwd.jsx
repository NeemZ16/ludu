import { useState } from "react"
import { Link } from 'react-router'
import './account.css'

/**
 * Send new password and time sensitive resetToken from query param to reset pwd endpoint
 * 
 */
function ResetPwd() {
    const queryParams = new URLSearchParams(window.location.search)
    const [formData, setFormData] = useState({"resetToken": queryParams.get("token")})

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setFormData(values => ({ ...values, [id]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const submitURL = "/api/forgot-pwd"

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
            <Link to="/" id="logo">
                <img src="/logo.svg" alt="Ludu Online logo" />
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="conf-password">Confirm Password:</label>
                    <input type="text" id="conf-password" onChange={handleChange} />
                </div>
                <input type="submit" value="Reset Password" />
            </form>
        </div>
    )
}

export default ResetPwd
