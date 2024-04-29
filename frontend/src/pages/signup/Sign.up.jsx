import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const Signup = () => {

   const [inputs,setinputs]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"Male"
  })

const{loading,signup}=useSignup();

const handlesubmit=async (e)=>{
  e.preventDefault();
  await signup(inputs);
}


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg  shadow-md'>
      <h1 className='text-2xl font-semibold text-center'>SignUp</h1>

      </div>
      <form onSubmit={handlesubmit}>
        <div>
        <label className='label p-2'>
            <span className='text-base font-bold label-text'>Full Name</span>
          </label>
          <input type="text" placeholder='username' className='w-full input input-bordered h-10'
                value={inputs.fullName}
                onChange={(e)=>{setinputs({...inputs,fullName:e.target.value})}}
          ></input>
        </div>

        <div>
        <label className='label p-2'>
            <span className='text-base font-bold label-text'>Username</span>
          </label>
          <input type="text" placeholder='username' className='w-full input input-bordered h-10'
               value={inputs.username}
               onChange={(e)=>{setinputs({...inputs,username:e.target.value})}}></input>
        </div>
       
        <div>
        <label className='label p-2'>
            <span className='text-base font-bold label-text'>Password</span>
          </label>
          <input type="password" placeholder='password' className='w-full input input-bordered h-10'
               value={inputs.password}
               onChange={(e)=>{setinputs({...inputs,password:e.target.value})}}></input>
        </div>
  

        <div>
        <label className='label p-2'>
            <span className='text-base font-bold label-text'>Confirm password</span>
          </label>
          <input type="password" placeholder='confirm password' className='w-full input input-bordered h-10'
               value={inputs.confirmPassword}
               onChange={(e)=>{setinputs({...inputs,confirmPassword:e.target.value})}}></input>
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base font-bold label-text'>Gender</span>
          </label>
          <select className="select select-primary w-full max-w-xs"
           onChange={(e)=>{setinputs({...inputs,gender:e.target.value})}}>
            <option>Male</option>
            <option>Female</option>
</select>

        </div>

        <Link to={'/login'} className='text-sm hover:underline honer:text-blue-600 mt-2 inline-block'>
          Signin
        </Link>

        <div>
          <button className='btn btn-block btn-sm mt-2'>SignUp</button>
        </div>

      </form>
      
    </div>
  )
}

export default Signup
