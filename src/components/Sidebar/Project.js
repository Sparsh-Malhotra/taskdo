import { BsPencil } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import './Project.css';

function Project({project,isEdit}){
    return(
        <div className='project-container'>
            <div className='project-name'>
                {project.name}
            </div>
            <div className='project-btns'>
                {
                    isEdit ? 
                    <div className='edit-delete'>
                        <span className='edit'>
                            <BsPencil></BsPencil>
                        </span>
                        <span className='delete'>
                            <AiFillDelete></AiFillDelete>
                        </span>
                    </div>
                    :
                    project.numOfTodos===0 ? 
                    "" :
                    <div className='project-todos'>
                        {project.numOfTodos}
                    </div>
                }
            </div>
        </div>
    )
}

export default Project;