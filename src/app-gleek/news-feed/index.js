import React from 'react';

// Components
import Toolbar from '../layout/components/toolbar';

const NewsFeed = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable News Feed" sectitle="News Feed" maintitle="Editable News Feed" />

            <div className="g_layout-list">

                {/* Common Header Title */}
                <div className="g_common-title">
                    <h2 className="g_mb-10">Editable with News Feed</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default NewsFeed