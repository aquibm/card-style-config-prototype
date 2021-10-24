import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import { Documentation } from './components/docs';
import { Footer } from './components/footer';
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

            <Documentation />
            <Footer />
        </Router>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
