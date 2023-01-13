import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BadgePage from './Page/BadgePage/BadgePage';
import HomePage from './Page/HomePage/HomePage';
import NavbarComponent from './Components/Navbar/NavbarComponent';

function NotFound() {
    return <h1>Not found</h1>;
}

function App() {
    return (
        <Router>
            <Switch>
                {/*   <Route path="/badge" component={BadgeModule}/> */}

                <Route path="/badge">
                    <NavbarComponent comp="badge" />
                    <BadgePage />
                </Route>

                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>

                <Route path="/home">
                    <NavbarComponent comp="home" />
                    <HomePage />
                </Route>

                <Route path="*" component={NotFound} />
                {/*   <Route path='*' component={NotFound}/> */}
            </Switch>
        </Router>
    );
}

export default App;
