import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import FAQPage from "./views/FAQPage";
import AddFAQ from "./views/AddFAQ";
import UpdateFAQ from "./views/UpdateFAQ";

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={FAQPage} />
                    <Route path="/add-faq" component={AddFAQ} />
                    <Route path="/update-faq/:_id" component={UpdateFAQ} />

                </Switch>
            </Router>
        )
    }
}