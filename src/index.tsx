import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import { AppRouter, Navigation } from './components/router';

import './index.css';

const App: FC = () => {
    return (
        <Router>
            <div className="app">
                <div className="app__section">
                    <Header />
                </div>

                <div className="app__section">
                    <Navigation />
                </div>

                <div className="app__section">
                    <AppRouter />
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
