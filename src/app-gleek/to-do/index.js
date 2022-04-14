import React from 'react';

// Components
import Toolbar from '../layout/components/toolbar';

const ToDo = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable To-Do" sectitle="To-Do" maintitle="Editable To-Do" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with To-Do</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default ToDo