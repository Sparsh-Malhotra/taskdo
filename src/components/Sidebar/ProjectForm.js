import './ProjectForm.css';

function ProjectForm({submitHandler, heading, value, setValue, setShowModal, confirmButtonText}){

    return (
        <form onSubmit={submitHandler} className='project-form'>
            <h3>{heading}</h3>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder='project name...'
                autoFocus
            />
            <button className='cancel' role='button' onClick={() => setShowModal(false)}>
                cancel
            </button>
            <button className="confirm">
                {confirmButtonText}
            </button>
        </form>
    )
}

export default ProjectForm