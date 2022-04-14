import React from 'react'
import { Routes, Route } from "react-router-dom";

// Import Components
import Dashboard from './dashboard';
import Layout from './layout'
import Mailbox from './mailbox';
import Layouts from './layouts';
import Ecommerce from './ecommerce';
import Calendar from './Calendar';
import Messanger from './messanger';
import Contacts from './contacts';
import FileManager from './file-manager';
import ToDo from './to-do';
import NewsFeed from './news-feed';
import Elements from './elements';
import Typography from './typography';
import Icons from './icons';
import Tables from './tables';

const AppGleek = () => {

    return (
        <React.Fragment>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/layouts" element={<Layouts />} />
                    <Route path="/mailbox" element={<Mailbox />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/messanger" element={<Messanger />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/file-manager" element={<FileManager />} />
                    <Route path="/to-do" element={<ToDo />} />
                    <Route path="/news-feed" element={<NewsFeed />} />
                    <Route path="/elements" element={<Elements />} />
                    <Route path="/typography" element={<Typography />} />
                    <Route path="/icons" element={<Icons />} />
                    <Route path="/tables" element={<Tables />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}

export default AppGleek