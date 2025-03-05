"use server"
import { supabase } from "./supabase";

export async function getTaskList() {
    const resp = await supabase.from("task").select("*").order("id");
    return resp.data;
}

export async function insertTask(task: string) {
    console.log("test")
    const { error } = await supabase.from("task").insert({ task: task })
    return !!error;
}

export async function deleteTask(id: number) {
    const { error } = await supabase.from("task").delete().eq('id', id);
    return !!error;
}