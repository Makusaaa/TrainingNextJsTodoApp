import { deleteTask, getTaskList, insertTask } from "@/services/crud";

export async function GET() {
    const data = await getTaskList();
    return Response.json(data);
}

export async function POST(request: Request) {
    const res = await request.json();
    const task = res["task"];
    insertTask(task)
    return Response.json(`inserted task ${task}`);
}
// curl localhost:3000/api/task -X POST -d "{ \"task\": \"ikut training next js\" }"

export async function DELETE(request: Request) {
    const res = await request.json();
    const id = res["id"];
    deleteTask(id)
    return Response.json(`deleted task with id ${id}`);
}
// curl localhost:3000/api/task -X DELETE -d "{ \"id\": 29 }"