import {useState} from 'react';
import './Item.css'
import SideBar from '../SideBar/SideBar';
const Item = (props) => {
    const [count, setCount] = useState(0)
    const {name,img,logoImg,post,info,time}= props.post
    return (
        <div>
            <div className='img-container'>
            <img src={img} alt="" />
            </div>
            <div className='banner-info1'>
                <div className='logo-name-parent'>
                    <div className='logoImg-parent'>
                        <img src={logoImg} alt="" />
                    </div>
                    <div>
                        <span className='man-name'><strong>{name}</strong></span><br />
                        <small>{post}</small>
                    </div>
                </div>
                <div className='save-parent'>
                    <span> {time}</span>
                    <button className='remove' onClick={() => setCount((count) => count + 1)}>
                     <i class="fa-regular fa-bookmark save-parent"></i>
                    </button>
                </div>
            </div>
            <div className='banner-info2'>
                <h2>{info}</h2>
                <p><span className='tag'>#beginners</span><span className='tag'>#programming</span></p>
                <p><button className='mark-btn'>Mark as read</button></p>
            </div>
        </div>
    );
};

export {Item};