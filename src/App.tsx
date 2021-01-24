import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {routes} from './routes';
import {Finance} from "./components/Finance";
import {Header} from './components/Header';
import {Button} from "./components/UIKit/Button";

export function App() {

    return (
        <Router>
            <div className='app'>
                <Route path={routes.root}>
                    <Header/>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                        <Button variant="link">all</Button>
                        <Button variant="glass">spending</Button>
                        <Button variant="link">income</Button>
                    </div>

                    <Finance/>
                </Route>
            </div>
        </Router>
    );
}
