import { useState } from "react";
import "./LocationModal.css";

function LocationModal({ setOpen, setLocation }) {
    const [inputValue, setInputValue] = useState("");

    const locations = [
        "Kurnool",
        "Hyderabad",
        "Bangalore",
        "Chennai",
        "Vijayawada"
    ];

    return ( <
        div className = "modal-overlay" >
        <
        div className = "modal" >
        <
        h3 > 📍Select delivery location < /h3>

        { /* INPUT BOX */ } <
        input type = "text"
        placeholder = "Enter your area"
        value = { inputValue }
        onChange = {
            (e) => setInputValue(e.target.value) }
        onKeyDown = {
            (e) => {
                if (e.key === "Enter" && inputValue.trim() !== "") {
                    setLocation(inputValue); // 🔥 typed value accepted
                    setInputValue("");
                    setOpen(false); // close modal
                }
            }
        }
        />

        { /* SUGGESTIONS */ } <
        div className = "location-list" > {
            locations.map((city) => ( <
                p key = { city }
                onClick = {
                    () => {
                        setLocation(city);
                        setOpen(false);
                    }
                } >
                📍{ city } <
                /p>
            ))
        } <
        /div>

        <
        button onClick = {
            () => setOpen(false) } > Cancel < /button> <
        /div> <
        /div>
    );
}

export default LocationModal;