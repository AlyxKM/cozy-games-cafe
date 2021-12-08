import React from "react";
import {useState} from 'react'
// import {useHistory} from 'react-router-dom'


function SignUp() {
    // let history = useHistory();

    // const [input , setInput] = useState({
    //     username: "",
    //     password: "",
    //     })


    //     function formFill(e){
    //         setInput({...input, [e.target.name]: e.target.value})
            
    //     }

    //     function handleSubmit(e){
    //         e.preventDefault()
    //         fetch("/signup", {
    //             method : 'POST',
    //             headers :{"Content-Type":"application/json"},
    //             body: JSON.stringify(input)
    //         })
    //         .then(res=>res.json())
    //         .then(currentUser => {
    //             setCurrentUser(currentUser)
    //             // history.push('/')
    //           })
              
    //         }




    return (
        <div className="SignUp">
          {/* <form>
           <div class="mb-3">
               <label for="username" class="form-label">Username</label>
               <input type="text" id="username" name='username'  />
           </div>
           <div class="mb-3">
               <label for="password" class="form-label">Password</label>
               <input type="password" id="password" name='password' />
           </div>
               <button type="submit" class="btn btn-primary">Sign Up</button>
           </form> */}
       </div>
       )
   }
   
   export default SignUp
   