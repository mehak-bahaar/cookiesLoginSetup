'use server'
import {defaultSession, sessionOptions, userData} from '@/lib'
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

export const getSession = async () =>{
    const session = await getIronSession<userData>(cookies(), sessionOptions)
    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn
    }
    return session
}
export const Login = async () =>{


}
export const Logout = async () =>{

}