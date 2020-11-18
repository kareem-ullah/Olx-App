import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './containers/home';
import bikeDetail from './containers/bikeDetail';
import UserData from './containers/userDetail/Form'
import History from './History';
import ChatName from './containers/nameChat';
import Chat from './containers/Chaat'

function CustomRouter () {

    return (
        <Router history={History}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bikeDetail" component={bikeDetail} />
                <Route path="/AddPost" component={UserData} />
                <Route path="/ChatName" component={ChatName} />
                <Route path="/Chat" component={Chat} />
               
                
            </Switch>
        </Router>
    );
}

export default CustomRouter;