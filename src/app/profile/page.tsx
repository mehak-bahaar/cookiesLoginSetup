import { changePremium, changeUsername, getSession } from '@/actions'
import { redirect } from 'next/navigation'
import React from 'react'

const Profile = async () => {

  const session = await getSession()

  if(!session.isLoggedIn){
    redirect('/')
  }

  return (
    <div className='w-[80%] mt-5 m-auto flex flex-col  gap-12'>
      <h1 className='text-4xl'>Hello! <b>{session.username}</b>. Welcome to Profile Page</h1>
      <div className='flex gap-4 flex-col'>
      <span className='text-3xl'> You are a <b>{session.isPro? 'Premium' : 'Free'} User</b></span>
      <form action={changePremium}>
        <button className='rounded w-full p-2 bg-black text-white'>{session.isPro ? "Cancel Premium" : 'Buy Premium'}</button>
      </form>
      </div>
      <form className='flex gap-4 flex-col' action={changeUsername}>
        <input  className='border-red rounded border-black p-2 text-slate-700 border-solid border-2' type="text" name='username' required placeholder={session.username} />
        <button className='rounded p-2 bg-black text-white'>Update Username</button>
      </form>
    </div>
  )
}

export default Profile
 