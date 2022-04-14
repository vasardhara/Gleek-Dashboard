import React from 'react';
import Toolbar from '../layout/components/toolbar';

const Contacts = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable Contacts" sectitle="Contacts" maintitle="Editable Contacts" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with Contacts</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Contacts