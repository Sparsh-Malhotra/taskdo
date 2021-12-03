import './Navbar.css';

function Navbar() {
    return(
        <div className="nav">
            <img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'></img>  
            <button className="logout-btn">Log Out</button>       
        </div>
    );
}

export default Navbar;