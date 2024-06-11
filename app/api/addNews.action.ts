"use server"

import { authOptions } from "@/lib/authOptions";
import supabase from "@/lib/database/supabase";
import { getServerSession } from "next-auth";

export type News = {
    title: string;
    content: string;
    attachment: string[];
};

export async function addNews({title, content,attachement}:{title:string, content:string,attachement:string[]}) {

    const session = await getServerSession(authOptions);
    
    if(!session) {
        throw new Error("you must be logged in")
    }

    const { data, error } = await supabase
    .from("news")
    .insert([
        { title, content, attachement }
    ])
    .select()
    console.log(data)
    if (error) {
        throw new Error(error.message)
    }
    return data

}

export async function getAllNews() {
    
    const { data, error } = await supabase
    .from('news')
    .select('*')

    if (error) {
        throw new Error(error.message)     
    }
    return data
}
            