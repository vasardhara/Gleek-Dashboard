import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <React.Fragment>
           <footer className="g_flex g_align-center g_content-center">
               <p className="g_flex g_align-center">2018 Copyrights <Link to="/" className="g_pl-5">© DigitalHeaps</Link></p>
           </footer>
        </React.Fragment>
    )
}

export default Footer