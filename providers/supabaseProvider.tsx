"use client"
import {createClient, SupabaseClient} from '@supabase/supabase-js'
import { useSession } from 'next-auth/react'
import { useContext, createContext, useMemo, useRef } from 'react'

const SupaBaseContext = createContext<SupabaseClient | null>(null)

export const useSupabase = () => {
    return useContext(SupaBaseContext)
}

export default function SupaBaseProvider({
    children
}:{
    children: React.ReactNode
}) {
    const {data:session} = useSession()
    const supabaseRef = useRef<SupabaseClient | null>(null)

    if (session?.user.supabase_token && !supabaseRef.current) {
        supabaseRef.current = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
            global: {
                headers: {
                    Authorization: `Bearer ${session.user.supabase_token}`
                }
            }
        })
    }

    return (
        <SupaBaseContext.Provider value={supabaseRef.current}>
            {children}
        </SupaBaseContext.Provider>
    )
}