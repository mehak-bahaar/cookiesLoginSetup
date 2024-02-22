import { getSession } from '@/actions'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Premium =async () => {
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect('/')
  }
  if(!session.isPro){
    return(
      <div className='w-[80%] m-auto flex felx-col gap-10'>
        <h1>Only Premium Users Can View This Content</h1>
        <Link className='rounded p-2 bg-black text-white' href='./profile'>Get Premium</Link>
      </div>
    )
  }
  return (
    <div>
      <h1>Welcome to the Premium Page</h1>
      <ul>
        <li>Apple</li>
        <li>Oranges</li>
        <li>Peach</li>
        <li>Apricot</li>
      </ul>
    </div>
  )
}

export default Premium
