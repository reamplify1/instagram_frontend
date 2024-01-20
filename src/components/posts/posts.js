'use client'
import Post from "./post/post"

export default function Posts({userPosts, openModalDetail} ){
    
    // let allPosts = userPosts.map(post => <Post imgSrc={post.url} imgNumber={post.description}/>)
    const reversedPosts = [...userPosts].reverse();
    return(
        <div>
            <div className="posts">
               {reversedPosts.map((post, index)=> 
               <Post imgSrc={post.image} 
               onClick={() => openModalDetail(post)} 
               description={post.description} 
               key={index}/>)}
                

            </div>
        </div>
    )
}