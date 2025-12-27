import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required");
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters");
        } else {
            setError("");
            alert("Login Successful ✅");
        }
    };

    return ( <
        div style = { styles.container } >
        <
        form style = { styles.form }
        onSubmit = { handleSubmit } >
        <
        h2 > Login < /h2>

        {
            error && < p style = {
                { color: "red" } } > { error } < /p>}

            <
            input
            type = "email"
            placeholder = "Email"
            value = { email }
            onChange = {
                (e) => setEmail(e.target.value) }
            />

            <
            input
            type = "password"
            placeholder = "Password"
            value = { password }
            onChange = {
                (e) => setPassword(e.target.value) }
            />

            <
            button type = "submit" > Login < /button>

            <
            p style = {
                    { marginTop: 10 } } >
                <
                Link to = "/forgot-password" > Forgot Password ? < /Link> <
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
            width: 300,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: 20,
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        },
    };

    export default Login;