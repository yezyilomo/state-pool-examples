import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    HashRouter as Router, Switch, Route, Link
} from 'react-router-dom';

import Example1 from './components/Example1'
import Example2 from './components/Example2';
import Example3 from './components/Example3';


function Application(props) {
    return (
        <Router base="/">
            <br/> <br/> <br/> <br/>
            <Link to="/example1">Example1</Link> &nbsp; &nbsp;
            <Link to="/example2">Example2</Link> &nbsp; &nbsp;
            <Link to="/example3">Example3</Link>
            <Switch>
                <Route exact path="/example1" component={Example1} />
                <Route exact path="/example2" component={Example2} />
                <Route exact path="/example3" component={Example3} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Application/>, document.querySelector("#root"));
