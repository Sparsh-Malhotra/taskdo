import { BsFillCircleFill,BsFillTrashFill } from 'react-icons/bs';
import { BiCircle } from 'react-icons/bi';
import { AiOutlineReload } from 'react-icons/ai';
import { useState } from 'react';
import './Todo.css';

function Todo({todo}){
    const [hover,setHover]=useState(false);

    return(
        <div className='Todo'>
            <div className='todo-container'
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            >
                <div className='checked-todo'>
                    {
                        todo.checked ?
                        <span className='checked'>
                            <BsFillCircleFill color='#bebebe'></BsFillCircleFill>
                        </span>
                        :
                        <span className='unchecked'>
                            <BiCircle></BiCircle>
                        </span>
                    }
                </div>
                <div className='todo-text'>
                    <p style={{color : todo.checked ? '#bebebf' : '#bebebe'}}>{todo.text}</p>
                    <span>{todo.time} - {todo.project}</span>
                    <div className={`line + ${todo.checked ? 'line-through' : ''}`}>
                    </div> 
                </div>
                <div className='add-to-next-day'>
                    {
                        todo.checked && 
                        <span><AiOutlineReload></AiOutlineReload></span>
                    }
                </div>
                <div className='delete-todo'>
                    {
                        (hover || todo.checked) && 
                        <span><BsFillTrashFill></BsFillTrashFill></span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo;