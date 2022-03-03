import React from 'react';
import store from '../store';


function Example3(props) {
    const [color, setColor] = store.useState("favColor", { default: "Black" })

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


            <div class="description">
                In this example we initialize a global state dynamically
                by using a "default" configuration<br/>
                <a href="https://github.com/yezyilomo/state-pool-examples/blob/main/src/components/Example3.js">
                    View code
                </a>
            </div>
        </div>
    );
}

export default Example3;
