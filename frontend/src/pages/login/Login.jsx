import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const[username,setusername]=useState("");
  const[password,setpassword]=useState("");

  const{loading,login}=useLogin();

  const handler=async(e)=>{
    e.preventDefault();
    await login(username,password);
  }

  return (
    <div className="flex flex-col items-center jusifty-center min-w-96 mx-auto">
      <div className='w-full p-4 rounded-lg shadow-md ' bg-clip-padding>
        <h1 className='text-2xl font-semibold text-center'>Login</h1>
      </div>
      <form onSubmit={handler}>
        <div>
          <label className='label p-2'>
            <span className='text-base font-bold label-text'>Username</span>
          </label>
          <input type="text" placeholder='username' className='w-full input input-bordered h-10'
          value={username}
          onChange={e=>setusername(e.target.value)}></input>
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base font-bold label-text'>Password</span>
          </label>
          <input value ={password}
          onChange={e=>setpassword(e.target.value)} type="password" placeholder='password' className='w-full input input-bordered h-10'></input>
        </div>
       
        <Link to={'/signup'} className='text-sm hover:underline honer:text-blue-600 mt-2 inline-block'>
          signup
        </Link>

        <div>
          <button className='btn btn-block btn-sm mt-2'>Login</button>
        </div>
      </form>
      
    </div>
  )
}

export default Login
