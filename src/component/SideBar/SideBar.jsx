import React from 'react';
import './SideBar.css'
const SideBar = ({bar}) => {
console.log(bar);
    return (
        <div className='main'>
            <div className="header-of-side-bar">
            Spent time on read : <span>0</span> min
            </div>
            <div className='body-of-side-bar'>
                <h2>Bookmarked Blogs :<span></span></h2>
                <div className='sub-body-of-side-bar'></div>
            </div>
        </div>
    );
};

export default SideBar;