import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        alert("Submit button")
        try {
            alert("Submit tryyy")
            await axios.post("http://localhost:5000/register", {
                email, password
            })

        } catch (e) {
            alert("wrong details")
            console.log(e);
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <form action='POST'>
                <label>Email Id</label><br></br>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Eamil Id'></input><br></br>
                <label>Password</label><br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Eneter Password'></input><br></br>
                <button onClick={submit}>Submit</button>
            </form>

        </div>
    )
}
export default Register;