import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './default/App';

const IndexApp = (): React.ReactElement => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}></Route>
            </Routes>
        </Router>
    );
};

export default IndexApp;
