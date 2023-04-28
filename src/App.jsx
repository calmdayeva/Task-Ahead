import Header from "./component/header";
import Add from "./component/addtask";
import Todo from "./component/todo";
import { useState, useEffect } from 'react';

function App() {

    const [task, setTask] = useState(JSON.parse(localStorage.getItem("task"))  || []);

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task) )
    }, [task])

    return (
        <>
        <Header />
        <main>

        <Add task={task} setTask={setTask}/>
        <Todo task={task} setTask={setTask}/>
        </main>
        </>
    );
}

export default App;