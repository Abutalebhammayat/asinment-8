import {useEffect, useState} from 'react';
import { Item } from '../Item/Item';
import SideBar from '../SideBar/SideBar';


const Post = () => {
    const [posts, setPosts] = useState([]);
    const [bars, setBar] = useState([]);

    useEffect(()=>{
        fetch('fackdb.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]);
    const eventHanlareByClick=(post)=>{
        const newBar = [...bars, post];
        console.log(post);
        setBar(newBar);
    }
    return (
        <div>
          {
            posts.map(post => <Item key={post.id} post={post} eventHanlareByClick={eventHanlareByClick}></Item>)
          }
          <div>
          <SideBar bar={bars}></SideBar>
          </div>
        </div>
    );
};

export default Post;