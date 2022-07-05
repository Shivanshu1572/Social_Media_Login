import {posts} from '../data';
import { useLocation } from 'react-router-dom';

const Post = () => {
  
    // const post = posts[0]
    const location = useLocation()
    const path = location.pathname.split("/")[2];

    const post = posts.find(p=>p.id.toString() === path);
    console.log(location)
    return (
      
    <div className='post'>
        <img src={post.img} alt='' className='postImg'/>
        <h1 className='postTitle'>{post.title}</h1>
        <p className='postDesc'>{post.discription}</p>
        <span className='about'>{post.About}</span>
    </div>
  )
}

export default Post