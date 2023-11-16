import {useState} from 'react';
import image from '../../images/profile.png'
import './NavBar.css'
const NavBar = () => {
    const [count,] = useState(0)
    console.log(count);
    return (
        <div className="nav">
         <h3>Integer Cafe</h3>
         <img src={image} alt="" />
        </div>
    );
};

export default NavBar;