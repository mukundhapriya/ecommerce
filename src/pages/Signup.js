import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirm) {
            setError("All fields are required");
            setSuccess("");
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setSuccess("");
        } else if (password !== confirm) {
            setError("Passwords do not match");
            setSuccess("");
        } else {
            setError("");
            setSuccess("Signup successful ✅ You can login now");
        }
    };

    return ( <
            div style = { styles.container } >
            <
            form style = { styles.form }
            onSubmit = { handleSubmit } >
            <
            h2 > Create Account < /h2>

            {
                error && < p style = {
                    { color: "red" } } > { error } < /p>} {
                    success && < p style = {
                        { color: "green" } } > { success } < /p>}

                    <
                    input
                    type = "text"
                    placeholder = "Full Name"
                    onChange = {
                        (e) => setName(e.target.value) }
                    />

                    <
                    input
                    type = "email"
                    placeholder = "Email"
                    onChange = {
                        (e) => setEmail(e.target.value) }
                    />

                    <
                    input
                    type = "password"
                    placeholder = "Password"
                    onChange = {
                        (e) => setPassword(e.target.value) }
                    />

                    <
                    input
                    type = "password"
                    placeholder = "Confirm Password"
                    onChange = {
                        (e) => setConfirm(e.target.value) }
                    />

                    <
                    button type = "submit" > Signup < /button>

                    <
                    p style = {
                            { marginTop: 10 } } >
                        Already have an account ? < Link to = "/login" > Login < /Link> <
                        /p> <
                        /form> <
                        /div>
                );
            }

            const styles = {
                container: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 80,
                },
                form: {
                    width: 320,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: 20,
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                },
            };

            export default Signup;