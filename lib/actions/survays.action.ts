"use server"
import { question } from "@/components/questionnaire/questionMaker"
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import supabase from "@/lib/database/supabase"

export async function addSurvay({questions}:{questions:question[]}) {
    const session = await getServerSession(authOptions);
    if(!session) {
        throw new Error("you must be admin")
    }

    if(!questions){
        throw new Error("invalid input")
    }

    try{
        const {error} = await supabase.from("question").insert({
            questions,
            author: session.user.id
        })
        
        if(error){
            throw new Error("supabase error")
        }
    }
    catch{
        throw new Error("supabase error")
    }

    return true
}

export async function getAllSurvays() {
    const session = await getServerSession(authOptions);
    if(!session) {
        throw new Error("you must be admin")
    }

    try{
        const {data,error} = await supabase.from("question").select("*")
        
        if(error){
            throw new Error("supabase error")
        }

        return data
    }
    catch{
        throw new Error("supabase error")
    }
}

export async function getLastSurvay() {
    const session = await getServerSession(authOptions);
    if(!session) {
        throw new Error("you must be admin")
    }

    try{
        const {data,error} = await supabase.from("question")
        .select("*").order("created_at", {ascending: false}).limit(1).single()
        
        if(error){
            throw new Error("supabase error")
        }

        return data
    }
    catch{
        throw new Error("supabase error")
    }
}