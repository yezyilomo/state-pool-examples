import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    HashRouter as Router, Switch, Route, Link
} from 'react-router-dom';

import Example1 from './components/Example1'
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example5 from './components/Example5';
import Example6 from './components/Example6';


function Application(props) {
    return (
        <Router base="/">
            <br/> <br/> <br/> <br/>
            <Link to="/example1">Example1</Link> &nbsp; &nbsp;
            <Link to="/example2">Example2</Link> &nbsp; &nbsp;
            <Link to="/example3">Example3</Link> &nbsp; &nbsp;
            <Link to="/example4">Example4</Link> &nbsp; &nbsp;
            <Link to="/example5">Example5</Link> &nbsp; &nbsp;
            <Link to="/example6">Example6</Link>
            <Switch>
                <Route exact path="/example1" component={Example1} />
                <Route exact path="/example2" component={Example2} />
                <Route exact path="/example3" component={Example3} />
                <Route exact path="/example4" component={Example4} />
                <Route exact path="/example5" component={Example5} />
                <Route exact path="/example6" component={Example6} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Application/>, document.querySelector("#root"));
