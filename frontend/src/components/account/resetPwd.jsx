import { useState } from "react";

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
        <div className="acctMgmtWrapper">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={handleChange} />
                </div>
                <input type="submit" value="register" />
            </form>
        </div>
    )
}

export default ResetPwd
