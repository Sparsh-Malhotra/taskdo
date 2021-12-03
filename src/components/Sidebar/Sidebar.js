import User from './User';
import AddTodo from './AddTodo';
import Calendar from './Calendar';
import Projects from './Projects';
import './Sidebar.css';

function Sidebar(){
    return(
        <div className="sidebar-container">
            <User></User>
            <AddTodo></AddTodo>
            <Calendar></Calendar>
            <Projects></Projects>
        </div>
    );
}
export default Sidebar;