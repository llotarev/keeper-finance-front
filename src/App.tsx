import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {routes} from './routes';
import {Finance} from "./components/Finance";
import {Header} from './components/Header';

export function App() {

    return (
        <Router>
            <div className='app'>
                <Route path={routes.root}>
                    {/*<Header/>*/}
                    <Finance/>
                </Route>
            </div>
        </Router>
    );
}
