import React from 'react';
import store from '../store';


store.setState("birthYear", "", {persist: true});

function Example4(props) {
    const [birthYear, setBirthYear] = store.useState("birthYear");

    const updateBirthYear = (e) => {
        setBirthYear(e.target.value);
    }

    return (
        <div>
            <br /><h3>Example 4</h3><br />
            My birth year is {birthYear? birthYear: "___"}  <br /><br /><br />
            <label><b>Birth Year</b></label>
            <input type="text" value={birthYear} onChange={updateBirthYear} placeholder="Enter your birth year" />


            <div class="description">
                In this example we're persisting year of birth to the local storage,
                that's why even if you refresh the app, birth of year doesn't change<br/>
                <a href="https://github.com/yezyilomo/state-pool-examples/blob/main/src/components/Example4.js">
                    View code
                </a>
            </div>
        </div>
    );
}

export default Example4;
