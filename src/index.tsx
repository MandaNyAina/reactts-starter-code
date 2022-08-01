import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.scss';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexApp from './pages';

ReactDOM.render(
    <React.StrictMode>
        <ToastContainer
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <ToastContainer />
        <IndexApp />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
