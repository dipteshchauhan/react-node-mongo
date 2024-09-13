import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const history=useNavigate();
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/login",{
                email,password
            })
            .then(
                res=>{
                    if(res.data=="exist"){

                        history("/home",{state:{id:email}});
                    }else if(res.data=="notexist"){
                        alert("user is not logged in");
                    }
                }
            )

        }catch(e){

            console.log(e);
        }
    }
    return (


        <div>
            <h1>Log In</h1>
            <form action="POST">
                <label>Email Id</label><br></br>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Eamil Id'></input><br></br>
                <label>Password</label><br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Eneter Password'></input><br></br>
                <button onClick={submit}>Submit</button><br></br>
            </form>
            <br></br>
            <br></br>
            OR
            <br></br>
            <br></br>
            <NavLink to="/register">Register</NavLink>



        </div>
    )
}
export default LogIn;