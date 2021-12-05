import { IoMdAdd } from 'react-icons/io';
import ProjectForm from './ProjectForm';
import Modal from './Modal';
import './AddProject.css';
import { useState } from 'react';

function AddProject(){
    const [showModal,setShowModal]=useState(false);
    const [projectName,setProjectName]=useState('');

    function submitHandler(e){

    }

    return (
        <div class='add-project-container'>
            <div className='add-btn'>
                <span onClick={()=>setShowModal(true)}>
                    <IoMdAdd size={24}></IoMdAdd>
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm 
                    submitHandler={submitHandler}
                    heading='New Project!'
                    value={projectName}
                    setValue={setProjectName}
                    confirmButtonText='+ Add Project'
                >
                </ProjectForm>
            </Modal>
        </div>
    );
}

export default AddProject;