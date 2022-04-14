import React from 'react';
import Toolbar from '../layout/components/toolbar';

const FileManager = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable File Manager" sectitle="File Manager" maintitle="Editable File Manager" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with FileManager</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default FileManager