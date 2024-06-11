"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import supabase from "@/lib/database/supabase"

import { userCred } from "@/components/users/userTable";
import bcrypt from "bcrypt";

export async function getUsers() {
    const session = await getServerSession(authOptions);
    if(!session) {
        throw new Error("you must be admin")
    }

    try{
        const {data, error} = await supabase.from("users").select("*")
        
        if(error){
            throw new Error("supabase error")
        }

        return data?.map((user)=>{
            return {
                email:user.email,
                username:user.username,
                id:user.id,
                created_at:user.created_at
            } as userCred
        }) || []
    }
    catch{
        throw new Error("supabase error")
    }
}

export async function AddUser({email,username,password}:{email:string,username:string,password:string}) {
    const session = await getServerSession(authOptions);
    if(!session) {
        throw new Error("you must be admin")
    }

    if(!email || !username || !password){
        throw new Error("invalid input")
    }

    try{
        const hashedPassword = await bcrypt.hash(password, 12)
        const {data,error} = await supabase.from("users").insert({
            email,
            username,
            password: hashedPassword
        }).select("*").single()
        
        if(error){
            throw new Error("supabase error")
        }

        return {
            email:data.email,
            username:data.username,
            id:data.id,
            created_at:data.created_at
        } as userCred
    }
    catch{
        throw new Error("supabase error")
    }
}

export async function DeleteUser({id}:{id:string}) {
    const session = await getServerSession(authOptions);
    if(!session) {
        throw new Error("you must be admin")
    }

    if(!id){
        throw new Error("invalid input")
    }

    try{
        const {error} = await supabase.from("users").delete().eq("id", id)
        
        if(error){
            throw new Error("supabase error")
        }
    }
    catch{ 
        throw new Error("supabase error")
    }
}