import { IoMdAdd } from 'react-icons/io';
import './AddProject.css';

function AddProject(){
    return (
        <div class='add-project-container'>
            <div className='add-btn'>
                <span>
                    <IoMdAdd size={24}></IoMdAdd>
                </span>
            </div>
        </div>
    );
}

export default AddProject;