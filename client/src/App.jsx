import { useEffect, useState } from "react";


export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todos");
      const todos = await res.json();
      
      // console.log(todos);
      setMessage(todos.mssg)
    }
    getTodos();
  }, [])

  return (
    <main className="container">
      <h1>Awesome Todos</h1>
      <p>{message}</p>
    </main>
  );
}