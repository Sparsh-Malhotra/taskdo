import ProjectForm from './ProjectForm';
import { useState } from 'react';

function RenameProject({project, setShowModal}){
    const [newProjectName, setNewProjectName] = useState(project.name)

    function submitHandler(e){

    }

    return (
        <div className='RenameProject'>
            <ProjectForm
                submitHandler={submitHandler}
                heading='Edit project name!'
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
            />
        </div>
    )
}

export default RenameProject