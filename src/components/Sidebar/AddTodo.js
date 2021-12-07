import { useState } from 'react';
import Modal from './Modal';
import { BsBell,BsCalendarCheck,BsClock } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen,AiOutlineClose } from 'react-icons/ai';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './AddTodo.css';

function AddTodo(){
    const [showModal,setShowModal]=useState(false);
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    return(
        <div className="add-container">
            <button className="add-btn" onClick={()=>setShowModal(true)}>+ New Todo</button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form>
                        <div className="text">
                            <h3>Add new to do!</h3>
                            <input
                                type='text'
                                value={text}
                                onChange={e => setText(e.target.value)}
                                placeholder='To do ...'
                                autoFocus
                            />
                        </div>
                        <div className="remind">
                            <BsBell></BsBell>
                            <p>Remind Me!</p>
                        </div>
                        <div className="pick-day">
                            <div className="title">
                                <BsCalendarCheck></BsCalendarCheck>
                                <p>Choose a day</p>
                            </div>
                            <DatePicker
                                value={day}
                                onChange={day => setDay(day)}
                            />
                        </div>
                        <div className="pick-time">
                            <div className="title">
                                <BsClock></BsClock>
                                <p>Choose time</p>
                            </div>
                            <TimePicker
                                value={time}
                                onChange={time => setTime(time)}
                            />
                        </div>
                        <div className="pick-project">
                            <div className="title">
                                <AiOutlineFundProjectionScreen size={30}></AiOutlineFundProjectionScreen>
                                <p>Choose a project</p>
                            </div>
                            <div className="projects">
                                <div className="project active">
                                    personal
                                </div>
                                <div className="project">
                                    work
                                </div>
                                <div className="project">
                                    work
                                </div>
                            </div>
                        </div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <AiOutlineClose size={30}></AiOutlineClose>
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </form>
                </MuiPickersUtilsProvider>
            </Modal>
        </div>
    );
}

export default AddTodo;