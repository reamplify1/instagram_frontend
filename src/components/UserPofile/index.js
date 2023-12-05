import Posts from "../posts/posts"
import ModalAdd from "../ModalAdd"
import ModalDetail from "../ModalDetail";
import { useState } from "react"
import ModalFollowers from "../ModalFollowers";
export function UserProfile({userPosts, userInfo, followersInfo}){

    const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
    const closeModalAdd = () => {
        setModalAddIsOpen(false)

    }
    const openModalAdd = () => {
        setModalAddIsOpen(true);
      };
    
// post modal window
    const [modalDetailIsOpen, setModalDetailIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const closeModalDetail = () => {
        setModalDetailIsOpen(false);
        setSelectedPost(null); // сбрасываем
      };
    
      const openModalDetail = (post) => {
        setSelectedPost(post);
        setModalDetailIsOpen(true);
      };

    const [currentPost, setCurrentPost] = useState({})

        const getPost = (post) =>{
        // console.log(post);
        setCurrentPost(post)
    }
    //modal followers
    //состояние для отслеживания открытия и закрытия
    const [modalFollowersIsOpen, setModalFollowersIsOpen] = useState(false);
    //функцию для открытия
    const openModalFollowers = () => {
        setModalFollowersIsOpen(true);
      };
    //затем onClick и  условие для отображения модалки
    //закрытие
      const closeModalFollowers = () => {
        setModalFollowersIsOpen(false);
        };
    
    return(
        <div>
            <div className="profileInfo">
                <div className="profileImg">
                    <img src={userInfo.profile_pic}/>
                </div>
                <div className="profileBio">
                    <div className="bio1">
                        <p>{userInfo.username}</p>
                        <button>Follow</button>
                        <img src="/images/dots.png"/>
                    </div>
                    <div className="bio2">
                        <span>{userInfo.stats.posts} <p> posts</p></span>
                        <span onClick={openModalFollowers}>{userInfo.stats.followers}<p> followers</p></span>
                        {modalFollowersIsOpen && 
                        <ModalFollowers close={closeModalFollowers} followersInfo={followersInfo}/>}
                        <span>{userInfo.stats.following} <p> following</p></span>
                    </div>
                    <div className="bio3">
                        <p>{userInfo.bio}</p>
                    </div>
                </div>
                <button onClick={() => setModalAddIsOpen(true)}>New Post</button>
            </div>
            {modalAddIsOpen && <ModalAdd close={closeModalAdd}/>}   

            <Posts userPosts={userPosts} openModalDetail={openModalDetail} />
            {modalDetailIsOpen && <ModalDetail userInfo={userInfo} close={closeModalDetail} selectedPost={selectedPost} />}

          
        </div>
    )

}