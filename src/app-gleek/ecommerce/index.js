import React from 'react';

// Components
import Toolbar from '../layout/components/toolbar';

const Ecommerce = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable Ecommerce" sectitle="Ecommerce" maintitle="Editable Ecommerce" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with Ecommerce</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Ecommerce