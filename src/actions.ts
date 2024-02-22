'use server'
import {defaultSession, sessionOptions, userData} from '@/lib'
import { getIronSession } from 'iron-session'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import exp from 'constants'
import { revalidatePath } from 'next/cache'

let username = 'Mehak'
let isPro = true
let isBlocked = false


export const getSession = async () =>{
    const session = await getIronSession<userData>(cookies(), sessionOptions)
    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn
    }
    //check the user in the database
    session.isBlocked = isBlocked
    session.isPro = isPro
    return session
}
export const Login = async (prevState:{error:undefined | string}, formData : FormData) =>{
    const session = await getSession();
    const formUsername = formData.get('username') as string ?? '';
    const formPassword = formData.get('password') as string;

    // check user in the database
    // const user = await db.getUser(username, password)
if(formUsername !== username){
    return {error:'wrong cradentioals'}
}
session.userId = '1'
session.username = formUsername
session.isPro = isPro
session.isLoggedIn = true

await session.save()
redirect('/profile')
}
export const Logout = async () =>{
    const  session = await getSession();
    session.destroy()
    redirect('/login')
}
export const changePremium = async () => {
    const session = await getSession()
    // update the user on database
    isPro=!session.isPro
    session.isPro = isPro
    await session.save()
    revalidatePath('/profile')
}
export const changeUsername = async (formData:FormData) => {
    const session = await getSession()
    // update the user on database

    const newUsername = formData.get('username') as string

    username = newUsername
    session.username = username
    await session.save()
    revalidatePath('/profile')
}