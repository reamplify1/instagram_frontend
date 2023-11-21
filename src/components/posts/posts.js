'use client'
import Post from "./post/post"

export default function Posts(array){
    
    return(
        <div>
            <div className="posts">
                <Post imgSrc={array.url[0]} imgNumber="6"/>
                <Post imgSrc="/images/posts/5.png" imgNumber="5"/>
                <Post imgSrc="/images/posts/4.png" imgNumber="4"/>
                <Post imgSrc="/images/posts/2.png" imgNumber="2"/>
                <Post imgSrc="/images/posts/3.png" imgNumber="3"/>
                <Post imgSrc="/images/posts/1.png" imgNumber="1"/>
                

            </div>
        </div>
    )
}