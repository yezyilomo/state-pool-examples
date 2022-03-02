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
            My name is : {name}  <br /><br /><br />
            <label><b>Name</b></label>
            <input type="text" value={name} onChange={updateName} placeholder="Enter your name" />
        </div>
    );
}

export default Example1;
