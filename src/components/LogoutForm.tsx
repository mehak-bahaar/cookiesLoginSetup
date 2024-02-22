import { Logout } from '@/actions'
import React from 'react'

const LogoutForm = () => {
  return (
    <form action={Logout}>
       <button className='focus:text-white focus:bg-black p-1 rounded'>Logout</button>
    </form>
  )
}

export default LogoutForm
