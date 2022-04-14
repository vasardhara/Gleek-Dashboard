import React from 'react';

// Components
import Toolbar from '../layout/components/toolbar';

const Mailbox = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable Mailbox" sectitle="Mailbox" maintitle="Editable Mailbox" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with Mailbox</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Mailbox