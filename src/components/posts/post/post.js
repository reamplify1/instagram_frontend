'use client'
import { END_POINT } from "@/app/config/EndPoint"
export default function Post({ imgSrc, onClick}){

    // let {imgSrc, imgNumber} = img

    return(
        // <div onClick={onClick}>
                // <img src={imgSrc} onClick={onClick} alt=""/>
                <img src={`${END_POINT}${imgSrc}`} onClick={onClick} alt=""/>

        // </div>
    )
}


// 'use client'
// export default function Post(array){
//     return(
//         <div>
//             <div className="posts">
//                 <img src="/images/posts/6.png" alt=""/>
//                 <img src="/images/posts/5.png" alt=""/>
//                 <img src="/images/posts/4.png" alt=""/>
//                 <img src="/images/posts/2.png" alt=""/>
//                 <img src="/images/posts/3.png" alt=""/>
//                 <img src="/images/posts/1.png" alt=""/>
//             </div>
//         </div>
//     )
// }