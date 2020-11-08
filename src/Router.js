import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Home from './containers/home';
import bikeDetail from './containers/bikeDetail';


function CustomRouter () {

    let history = useHistory();

    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/bikeDetail" component={bikeDetail} />
            </div>
        </Router>
    );
}

export default CustomRouter;