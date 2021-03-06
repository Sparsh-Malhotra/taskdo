import { BsPencil } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import Modal from './Modal';
import RenameProject from './RenameProject';
import {useState, useContext} from 'react';
import './Project.css';
import { TodoContext } from '../../context';

function Project({project,isEdit}){

    const { setSelectedProject } = useContext(TodoContext)

    const [showModal, setShowModal] = useState(false)

    return(
        <div className='project-container'>
            <div 
                className='project-name' 
                onClick={ () => setSelectedProject(project.name) } 
            >
                {project.name}
            </div>
            <div className='project-btns'>
                {
                    isEdit ? 
                    <div className='edit-delete'>
                        <span className='edit' onClick={()=>setShowModal(true)}>
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
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal}></RenameProject>
            </Modal>
        </div>
    )
}

export default Project;