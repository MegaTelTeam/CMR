import {AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from "bcrypt";

import jwt from 'jsonwebtoken'
import supabase from "./database/supabase";


export const authOptions:AuthOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text"},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("invalid credentials")
                }

                const {data: user, error} = await supabase.from("users").select("*").eq("email", credentials.email).single()   
                
                if(!user || !user.password){
                    throw new Error("invalid credentials")
                }
                
                const validPass = await bcrypt.compare(
                    credentials.password,
                    user.password
                )

                if(!validPass){
                    throw new Error("invalid credentials")
                }

                return user
            }
        }),
    ],
    session:{
        strategy: "jwt",
        maxAge: 60 * 60 * 6,
    },
    jwt: {
        maxAge: 60 * 60 * 10
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async session({session,token}){
            if(token.sub){
                session.user.name = token.name
                session.user.id = token.sub
            }

            const supabaseTokenPayload = {
                access_level:"authenticated",
                exp: Math.floor(Date.now() / 1000) + (60 * 60 * 6),
                id : session.user.id,
                email : session.user.email,
                username: session.user.name
            }

            session.user.supabase_token = jwt.sign(supabaseTokenPayload, process.env.SUPABASE_JWT_SECRET!)
            
            return session
        },
        async jwt({token}){
            if(!token.sub){
                return token
            }

            try{

                const {data: user, error} = await supabase.from("users").select("*").eq("id", token.sub).single()

                if(user){
                    token.name = user.username
                }
            }
            catch(error){
                console.log(error)
                return token
            }

            return token
        }
    }
}