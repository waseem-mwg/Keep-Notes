import React from 'react'

const Footer = () =>{
    const year= new Date();
    return(
        <>
        <footer>
            <p> Created By <span>Waseem</span> | © {year.getFullYear()} All Rights reserved</p>
        </footer>
        </>
    )
}
export default Footer;