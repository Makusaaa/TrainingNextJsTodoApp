"use server"

import { cookies } from "next/headers"

export async function login(username: string, password: string){
    if(username == "max" && password == "123")
    {
        (await cookies()).set("token", "supersecrettoken", {httpOnly:true})
        return true
    }
    return false
}