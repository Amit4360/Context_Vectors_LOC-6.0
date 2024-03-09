import React from 'react'

const Login = () => {
  return (
    <>
        <p>Login</p>
        <input className='border-2' type="text" placeholder='Username'/>
        <input className='border-2' type="text" placeholder='Password'/>
        <button className='border-2'>Submit</button>
    </>
  )
}

export default Login