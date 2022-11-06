import React from 'react';
import store from '../store';


store.setState("count", 0);

function Example6(props) {
    const [count, ] = store.useState("count");

    return (
        <div>
            <br /><h3>Example 6</h3><br />
            Count {count}  <br /><br /><br />


            <div class="description">
                In this example we're updating a global state from outside a react component<br/>
                <a href="https://github.com/yezyilomo/state-pool-examples/blob/main/src/components/Example6.js">
                    View code
                </a>
            </div>
        </div>
    );
}

// Update global state from outside a component
setInterval(() => {
    store.getState("count").setValue(
        count => count + 1
    )
}, 1000);


export default Example6;
