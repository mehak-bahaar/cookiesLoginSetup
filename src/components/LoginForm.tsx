'use client'
import { Login } from '@/actions'
import React from 'react'
import { useFormState } from 'react-dom'

const LoginForm = () => {
    const [state, formAction ]= useFormState<any,FormData>(Login, undefined)
  return (
    <form action={formAction} className='flex items-center justify-center flex-col gap-6'>
      <input className='border-red rounded border-black p-2 text-slate-700 border-solid border-2' type="text" name='username' required placeholder='username' />
      <input className='border-red rounded border-black p-2 text-slate-700 border-solid border-2' type="password" name='password' required placeholder='password' />
      {state?.error && <p>{state.error}</p>}
      <button className='rounded p-2 bg-black text-white'>Login</button>
    </form>
  )
}

export default LoginForm
 