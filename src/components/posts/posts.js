'use client'
import Post from "./post/post"

export default function Posts({userPosts}){
    
    // let allPosts = userPosts.map(post => <Post imgSrc={post.url} imgNumber={post.description}/>)
    
    return(
        <div>
            <div className="posts">
               {userPosts.map((post, index)=> <Post imgSrc={post.url} imgNumber={post.description} key={index}/>)}
                

            </div>
        </div>
    )
}