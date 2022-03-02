import React from 'react';
import store from '../store';


function Example3(props) {
    const [color, setColor] = store.useState("favColor", { default: "black" })

    const updateColor = (e) => {
        setColor(e.target.value);
    }

    const reset = (e) => {
        store.remove("favColor", () => { })
    }

    return (
        <div>
            <br /><h3>Example 3</h3><br />
            My favourite color is {color} <br /><br /><br />
            <input type="text" value={color} onChange={updateColor} placeholder="Enter your fav color" />
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Example3;
