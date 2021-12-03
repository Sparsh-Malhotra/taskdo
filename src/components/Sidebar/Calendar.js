import { AiTwotoneCalendar,AiOutlineArrowUp } from 'react-icons/ai';
import './Calendar.css';

function Calendar(){
    const calendarItems=['Today','Next 7 days','All days'];

    return (
        <div className='calendar-container'>
            <div className='header'>
                <div className='title'>
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
                    <div className="item" key={item}>
                        {item}
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default Calendar;