import { AiTwotoneCalendar,AiOutlineArrowUp } from 'react-icons/ai';
import './Calendar.css';
import { TodoContext } from '../../context';
import { useContext } from 'react';

function Calendar(){

    const { setSelectedProject } = useContext(TodoContext)

    const calendarItems=['Today','Next 7 days','All days'];

    return (
        <div className='calendar-container'>
            <div className='calendar-header'>
                <div className='calendar-title'>
                    <AiTwotoneCalendar></AiTwotoneCalendar>
                    <p>Calendar</p>
                </div>
                <div className='up-btn'>
                    <AiOutlineArrowUp></AiOutlineArrowUp>
                </div>
            </div>
            <div className='calendar-items'>
            {
                calendarItems.map(item =>
                    <div 
                        className="item" 
                        key={item}
                        onClick = { () => setSelectedProject(item) }
                    >
                        {item}
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default Calendar;