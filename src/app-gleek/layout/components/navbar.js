import React from 'react'

const Navbar = () => {

    return (
        <React.Fragment>
            <div className="g_content-header g_flex g_align-center g_content-between g_px-20">
                <div className="g_content-header-left">
                    <div className="g_input-common g_relative">
                        <input type="text" className="form-control g_input" placeholder="Search..." />
                        <i className="ri-search-line g_input-btn g_cp"></i>
                    </div>
                </div>

                <div className="g_content-header-right g_flex g_align-center">
                    <div className="g_common-icon g_flex g_cp">
                        <i className="ri-mail-fill"></i>
                        <span className="g_dot"></span>
                    </div>
                    <div className="g_common-icon g_flex g_cp">
                        <i className="ri-notification-3-fill"></i>
                        <span className="g_dot"></span>
                    </div>
                    <div className="g_user-box">
                        <div className="g_flex g_align-center g_cp">
                            <img src="assets/avatar/avatar.png" className="g_user-box-img" alt="user avatar" />
                            <div className="g_user-box-info g_flex g_align-center">
                                George Martin
                                <i className="ri-arrow-down-s-line"></i>
                            </div>
                        </div>
                    </div>
                    <div className="g_common-icon g_common-icon-menu g_flex g_cp">
                        <i className="ri-align-justify"></i>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar