import AddProject from './AddProject';
import Project from './Project';
import { AiOutlineFundProjectionScreen,AiOutlineArrowUp } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import AddTodo from './AddTodo';
import './Projects.css';
import { useState } from 'react';

function Projects(){
    const [showProjects,setShowProjects]=useState(true);
    const [editProject,setEditProject]=useState(false);
    const pencilColor = editProject ? "#1ec94c" : "#000000";
    const projectsItems=[
        { id : 1, name : "personal", numOfTodos : 0 },
        { id : 2, name : "work", numOfTodos : 1 },
        { id : 3, name : "other", numOfTodos : 2 }
    ];

    return(
        <div className='projects-container'>
            <div className='projects-header'>
                <div className='projects-title'>
                    <AiOutlineFundProjectionScreen size={24}></AiOutlineFundProjectionScreen>
                    <p>Projects</p>
                </div>
                <div className='projects-btn'>
                    {
                        showProjects && projectsItems.length > 0 &&
                        <span className='edit-btn' onClick={()=>setEditProject(edit => !edit)}>
                            <BsFillPencilFill size={18} color={pencilColor}></BsFillPencilFill>
                        </span>
                    }
                    <AddProject></AddProject>
                    <span className='up-btn'>
                        <AiOutlineArrowUp size={20}></AiOutlineArrowUp>
                    </span>
                </div>
            </div>
            <div className='project-items'>
                {
                    projectsItems.map(project=>
                        <Project project={project} key={project.id} isEdit={editProject}></Project>
                    )
                }
            </div>
        </div>
    );
}

export default Projects;