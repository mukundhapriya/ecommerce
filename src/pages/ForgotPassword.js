import { useState } from "react";

function ForgotPassword() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [msg, setMsg] = useState("");

    const handleReset = (e) => {
        e.preventDefault();

        if (!password || !confirm) {
            setMsg("All fields required");
        } else if (password.length < 6) {
            setMsg("Password must be at least 6 characters");
        } else if (password !== confirm) {
            setMsg("Passwords do not match");
        } else {
            setMsg("Password reset successful ✅");
        }
    };

    return ( <
        div style = { styles.container } >
        <
        form style = { styles.form }
        onSubmit = { handleReset } >
        <
        h2 > Reset Password < /h2>

        {
            msg && < p style = {
                { color: msg.includes("successful") ? "green" : "red" } } > { msg } < /p>}

            <
            input
            type = "password"
            placeholder = "New Password"
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
            button type = "submit" > Set Password < /button> <
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

    export default ForgotPassword;