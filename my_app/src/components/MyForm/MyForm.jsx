import React, { useState } from 'react'

const MyForm = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
     const SignUp = ()=>{
         
     }

  return (
    <form onSubmit={SignUp} className='container '>
        <h1>SignUp Form</h1>
        <input type="text" placeholder='Enter your Name' id='name' className='form-control' />
        <input type="email" placeholder='Enter your Email' id='email' className='form-control' />
        <input type="password" placeholder='Enter your Password' id='password' className='form-control' />
        <button type='submit' className='btn btn-primary'>Register</button>
    </form>
  )
}

export default MyForm
