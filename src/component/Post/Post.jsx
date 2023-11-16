import {useEffect, useState} from 'react';
import { Item } from '../Item/Item';


const Post = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('fackdb.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
          {
            posts.map(post => <Item key={post.id} post={post}></Item>)
          }
        </div>
    );
};

export default Post;