import React from 'react';
import store from '../store';


store.setState("user", { height: "", weight: "" });

function Example2(props) {
    const [name,] = store.useState("name")
    const [user, , updateUser] = store.useState("user")

    const updateHeight = (e) => {
        updateUser(user => { user.height = e.target.value });
    }

    const updateWeight = (e) => {
        updateUser(user => { user.weight = e.target.value });
    }

    return (
        <div>
            <br /><h3>Example 2</h3><br />
            My name is {name? name: "___"}  <br /><br />
            My height is {user.height ? `${user.height} m` : '___'},
            and my weight is : {user.weight ? `${user.weight} kg` : '___'}  <br /><br /><br />

            <label><b>Height</b></label>
            <input type="text" value={user.height} onChange={updateHeight} placeholder="Enter your height" /> <br />
            <label><b>Weight</b></label>
            <input type="text" value={user.weight} onChange={updateWeight} placeholder="Enter your weight" />


            <div class="description">
                In this example we use the updater to update a nested global state<br/>
                <a href="https://github.com/yezyilomo/state-pool-examples/blob/main/src/components/Example2.js">
                    View code
                </a>
            </div>
        </div>
    );
}

export default Example2;
