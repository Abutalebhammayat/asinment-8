// import React from 'react';
import Post from '../Post/Post';
import SideBar from '../SideBar/SideBar';
import './Container.css'


const Container = () => {
    return (
        <div className='container'>
          <div>
          <Post></Post> 
          </div>
           <div>
           <SideBar></SideBar>
           </div>
        </div>
    );
};

export default Container;