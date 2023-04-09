import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UserInfo from "./components/userInfo";
import NotFoundPage from "./components/notFoundPage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" component={UserInfo} />
                {/* <Route path="/users/:userId" component={UserInfo} /> */}
                <Route path="/users" exact component={Users} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;
