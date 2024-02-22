import LoginForm from '@/components/LoginForm'
import React from 'react'

const Login = () => {
  return (
    <div className=' flex items-center justify-center  flex-col gap-10'>
      <h2 className='text-2xl'>Welcome to Login page</h2>
      <LoginForm/>
    </div>
  )
}

export default Login
