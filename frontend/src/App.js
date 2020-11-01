import React from 'react';
import './App.css';
import Nav from './Nav';
import Page_Principale from './Page_Principale';
import Page_Admin from './Page_Admin';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
    return(
        <Router>
            <div className="App">
                <Nav></Nav>
                <Switch>
                <Route path="/Home" exact component = {Home}></Route>
                <Route path="/Page_Principale" component={Page_Principale}></Route>
                <Route path="/Page_Admin" component={Page_Admin}></Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;