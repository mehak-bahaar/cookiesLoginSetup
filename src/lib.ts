import { SessionOptions } from "iron-session";

export interface userData {
    userId?: string;
    userEmail?:string;
    img?:string;
    isPro?:boolean;
    isLoggedIn : boolean;
}
export const defaultSession: userData ={
    isLoggedIn : false
}

export const sessionOptions : SessionOptions ={
    password: process.env.SECRET_KEY!,
    cookieName: 'mehaks session',
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    }
}