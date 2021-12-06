import Todo from './Todo';
import Next7Days from './Next7Days';
import './Todos.css';
import { useContext } from 'react';
import { TodoContext } from '../../context';

function Todos(){
    const { selectedTodo } = useContext(TodoContext);

    const todos = [
        {
            id : 'd54sd4',
            text : "Go for a run",
            time : "10:00 AM",
            date : "06/03/2021",
            day : "6",
            checked : true,
            color : '#00ff00',
            project : 'personal'
        },
        {
            id : 'd54fdf',
            text : "Meeting",
            time : "09:00 AM",
            date : "08/03/2021",
            day : "1",
            checked : false,
            color : '#00ff00',
            project : 'work'
        }
    ]

    return(
        <div className='Todos'>
            <div className='selected-todo'>
                {selectedTodo}
            </div>
            <div className='todos-container'>
                {
                    selectedTodo==='Next 7 days'
                    ?
                    <Next7Days todos={todos}></Next7Days>
                    :
                    todos.map(todo=>
                    <Todo todo={todo} key={todo.id}></Todo>
                    )
                }
            </div>
        </div>
    )
}

export default Todos;