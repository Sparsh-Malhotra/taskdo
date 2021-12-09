import './Navbar.css';

function Navbar() {
    return(
        <div className="nav">
            <h1 className="heading">TASK DO</h1>
            {/* <img className="logo" src='#' alt='logo'></img>   */}
            <button className="logout-btn">Log Out</button>       
        </div>
    );
}

export default Navbar;