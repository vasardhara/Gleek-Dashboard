import React from 'react';
import Toolbar from '../layout/components/toolbar';

const Calendar = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable Calendar" sectitle="Calendar" maintitle="Editable Calendar" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with Calendar</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Calendar