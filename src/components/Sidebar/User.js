import './User.css';

function User(){
    return(
        <div className="user-container">
            <img src="https://i.pravatar.cc/100" alt="user-image"></img>
            <div className="user-details">
                <p>Agrima Shawne</p>
                <a href="#">Log Out</a>
            </div>
        </div>
    );
}

export default User;