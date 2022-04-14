import React from 'react'

const Toolbar = (props) => {
    return (
        <React.Fragment>
            <div className="g_toolbar-header g_flex g_align-center g_content-between g_px-20">
                
                <h1 className="g_cp">{props.title}</h1>

                <ul className="g_flex g_align-center">
                    <li className="g_cp active">Home</li>
                    <li className="g_cp">{props.sectitle}</li>
                    <li className="g_cp">{props.maintitle}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Toolbar