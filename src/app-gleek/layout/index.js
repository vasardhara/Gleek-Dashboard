import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

const Layout = (props) => {
    return (
        <React.Fragment>
            <div className="g_layout">

                <Sidebar />

                <div className="g_content">
                    <Navbar />
                    {props.children}
                    <Footer />
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Layout