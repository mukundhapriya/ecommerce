import "./Footer.css";

function Footer() {
    return ( <
        footer className = "footer" >
        <
        div className = "footer-container" >

        { /* BRAND */ } <
        div className = "footer-section" >
        <
        h2 className = "footer-logo" > Mart < /h2> <
        p > Fresh groceries delivered to your door in minutes. < /p> < /
        div >

        { /* LINKS */ } <
        div className = "footer-section" >
        <
        h4 > Quick Links < /h4> <
        ul >
        <
        li > Home < /li> <
        li > Products < /li> <
        li > Cart < /li> <
        li > Orders < /li> < /
        ul > <
        /div>

        { /* SUPPORT */ } <
        div className = "footer-section" >
        <
        h4 > Support < /h4> <
        ul >
        <
        li > Help Center < /li> <
        li > Privacy Policy < /li> <
        li > Terms & Conditions < /li> < /
        ul > <
        /div>

        { /* CONTACT */ } <
        div className = "footer-section" >
        <
        h4 > Contact < /h4> <
        p > 📞+91 98765 43210 < /p> <
        p > 📧support @srkmart.com < /p> < /
        div >

        <
        /div>

        <
        div className = "footer-bottom" > ©{ new Date().getFullYear() }
        SRK Mart.All rights reserved. <
        /div> < /
        footer >
    );
}

export default Footer;