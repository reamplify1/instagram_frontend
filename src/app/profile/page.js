'use client'
import UserLogin from "@/components/auth/user/UserLogin";
import HeaderProfile from "@/components/HeaderProfile/HeaderProfile";
import Footer from "@/components/footer/footer";
import Posts from "@/components/posts/posts";
export default function Login(){

    const posts = [
        {
            url:  '/images/posts/6.png',
            description: '123123'
        },
        
    ]

    return (
    <div>
        <HeaderProfile />
        <div className="profileInfo">
            <div className="profileImg">
                <img src="/images/profile-pic.png"/>
            </div>
            <div className="profileBio">
                <div className="bio1">
                    <p>terrylucas</p>
                    <button>Follow</button>
                    <img src="/images/dots.png"/>
                </div>
                <div className="bio2">
                    <span>1.258 <p> posts</p></span>
                    <span>4M <p> followers</p></span>
                    <span>1.250 <p> following</p></span>
                </div>
                <div className="bio3">
                    <p>Terry Lucas</p>
                </div>
            </div>
        </div>
        <div>
            <Posts url={posts}/>
        </div>
        <Footer/>
    </div>
    )
}