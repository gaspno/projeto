
import './styles.css';

export function PostCard(props){
    const {post}=props
    return (
        <div  className="post">
                <img src={post.cover} alt={post.title}/>
            <h1>{post.title}</h1>
            <p>{post.body}</p>        
        </div>
    )

}
