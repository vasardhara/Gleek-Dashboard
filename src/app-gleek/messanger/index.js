import React from 'react';
import Toolbar from '../layout/components/toolbar';

const Messanger = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable Messanger" sectitle="Messanger" maintitle="Editable Messanger" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with Messanger</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Messanger