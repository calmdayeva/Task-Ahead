import './addtask.css'

function Add({task, setTask}) {
    function handleSubmit(e) {
        e.preventDefault();

        const date = new Date();
        const Time = date.toLocaleTimeString();
        const day = date.toLocaleDateString();

        const newItem = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${Time} ${day}`
        };
        setTask([...task, newItem])
        e.target.task.value=""

    }


    return(
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" autoComplete='on' maxLength={25} name='task' placeholder='add task' />

            <button type='submit'>Add</button>
        </form>
        </>
    );
}
export default Add;