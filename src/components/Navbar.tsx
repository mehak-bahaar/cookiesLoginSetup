
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState  } from 'react'
import LogoutForm from './LogoutForm'
import { getSession } from '@/actions'
const Navbar = async () => {
    const session = await getSession()
    const links = [
        {url:'/', title:'Home'},
        {url:'/premium', title:'Premium'},
        {url:'/profile', title:'Profile'},
        {url:'/login', title:'Login'},
    ]
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-4 ">
      {/* links */}
      <div className=" flex items-center justify-center gap-4 w-1/2 xl:w-1/3  text-xl">
      {links.map((link)=>{
        return(<Link href={link.url} key={link.title} className={`p-1 rounded `}>{link.title}</Link>)
    })}
   
   {session.isLoggedIn && <LogoutForm/>}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex w-1/3  justify-center items-center">
        <Link
          href="/"
          className="text-sm flex items-center justify-center p-1 bg-black font-semibold rounded-md  "
          style={{ width: "max-content" }}
        >
          <span className="text-white mr-1 rounded-md">Mehak</span>
          <span className="m-1 bg-white text-black w-12 h-7 flex items-center justify-center rounded-md">
            Bahar
          </span>
        </Link>
      </div>
      {/* socials */}
      {/* responsive menu */}
      {/* menu button */}
      {/* <button
        className="w-10 h-8 flex flex-col justify-between z-50 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`w-10 h-1 ${menuOpen ? "bg-white" : "bg-black"} `}
        ></div>
        <div
          className={`w-10 h-1 ${menuOpen ? "bg-white" : "bg-black"} `}
        ></div>
        <div
          className={`w-10 h-1 ${menuOpen ? "bg-white" : "bg-black"} `}
        ></div>
      </button>
      {/* menu list */}
      {/* <div
        className={` z-40 absolute top-0 left-0 w-screen h-screen bg-black  text-white ${
          menuOpen ? "flex" : "hidden"
        }  items-center justify-center flex-col gap-8 text-4xl font-extralight`}
      >
        {links.map((link) => {
          return (
            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              key={link.title}
              href={link.url}
            >
              {link.title}
            </Link>
          );
        })}  */}
      {/* </div> */}
    </div>
  );
}

export default Navbar
