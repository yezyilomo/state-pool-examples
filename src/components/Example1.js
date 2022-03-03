import React from 'react';
import store from '../store';


store.setState("name", "");

function Example1(props) {
    const [name, setName] = store.useState("name");

    const updateName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <br /><h3>Example 1</h3><br />
            My name is {name? name: "___"}  <br /><br /><br />
            <label><b>Name</b></label>
            <input type="text" value={name} onChange={updateName} placeholder="Enter your name" />


            <div class="description">
                This is a simple example showing how to use state-pool <br/>
                <a href="https://github.com/yezyilomo/state-pool-examples/blob/main/src/components/Example1.js">
                    View code
                </a>
            </div>
        </div>
    );
}

export default Example1;
