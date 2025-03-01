export default function Home() {
  return (
    <form method="post" className="h-full">
      <div className="mx-auto pt-28 w-full max-w-sm border-none shadow-none">
        <h1 className="text-2xl my-3">Welcome to My TodoList App</h1>
        <div className="grid gap-4">
          <div className="grid gap-2">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" autoComplete="off" autoCapitalize="none" name="username" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" autoComplete="off" name="password" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
          </div>
        </div>
        <div className="flex items-center p-6 pt-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
