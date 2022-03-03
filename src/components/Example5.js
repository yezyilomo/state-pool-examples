import React from 'react';
import store from '../store';


function Example5(props) {
    const [height, setHeight] = store.useState("user", {
        selector: user => user.height,
        patcher: (user, val) => { user.height = val }
    });

    const updateHeight = (e) => {
        setHeight(e.target.value);
    }

    return (
        <div>
            <br /><h3>Example 5</h3><br />
            My height is {height ? `${height} m` : '___'} <br /><br /><br />
            <label><b>Height</b></label>
            <input type="text" value={height} onChange={updateHeight} placeholder="Enter your height" />


            <div class="description">
                In this example we subscribe and update nested global state(user.height)
                by using "selector" and "patcher" configurations<br/>
                <a href="https://github.com/yezyilomo/state-pool-examples/blob/main/src/components/Example5.js">
                    View code
                </a>
            </div>
        </div>
    );
}

export default Example5;
