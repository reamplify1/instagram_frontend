'use client'
import HeaderProfile from "@/components/HeaderProfile/HeaderProfile"
import React, { useState } from 'react';
import ModalStories from "@/components/ModalStories"
export default function Home () {
    // вручную копипастим массив
    let followersInfo = [
        
        {
            login: 'edenhazard10',
            name: 'Eden Hazard',
            profilePic: '/images/followers.jpg',
            stories: 
            {
                story: '/images/user-story.jpg',
                // story: '/images/followers.jpg',
                // story: '/images/followers.jpg',

            }
        },
        {
            login: 'selenagomez',
            name: 'Selena',
            profilePic: '/images/followers.jpg',
        },
        {
            login: 'trueunder',
            name: 'Vova Adidas',
            profilePic: '/images/followers.jpg',
            stories: 
            {
                story: '/images/user-story.jpg',
                // story: '/images/followers.jpg',
                // story: '/images/followers.jpg',

            }
        },
        {
            login: 'piwerasd',
            name: 'Ho Hey',
            profilePic: '/images/followers.jpg',
        },
        {
            login: 'trueunder',
            name: 'Vova Adidas',
            profilePic: '/images/followers.jpg',
        },
        {
            login: 'useruseruser',
            name: 'User Userovich',
            profilePic: '/images/followers.jpg',
        },
        {
            login: 'trueunder',
            name: 'Vova Adidas',
            profilePic: '/images/followers.jpg',
        },
        {
            login: 'trueunder',
            name: 'Vova Adidas',
            profilePic: '/images/followers.jpg',
        },
        {
            login: 'trueunder',
            name: 'Vova Adidas',
            profilePic: '/images/followers.jpg',
        },
    ]

    // modal stories: состояние, открытие, закрытие. Вешаем онклик на див, подключаем компонент в ModalStories добавляем обработку вне модалки для закрытия
    
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const storyClick = (user) => {
      setSelectedUser(user);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedUser(null);
      setIsModalOpen(false);
    };
    return(
        <div>
            <HeaderProfile/>
            <section className="home">
                <div className="home-left">
                    <div className="home-stories">
                        {followersInfo.map((follower, index) => (
                        <div key={index} className="story-item" onClick={() => storyClick(follower)}>
                            <img src={follower.profilePic} alt={follower.name} />
                            <p>{follower.name}</p>
                        </div>
                        ))}
                        <div className="stories-border">
                            <div className="story-item">
                                <img src="/images/followers.jpg"/>
                                <span>lauramatt</span>
                            </div>
                           
                        </div>

                    </div>
                    <div className="home-post">
                        <div className="home-post-user">
                            <div className="home-post-user-left">
                                <img src="/images/profile-pic.png"/>
                                <p>terrylucas</p>
                            </div>
                            <div className="home-post-user-right">
                                <img src="/images/dots.png"/>
                            </div>
                        </div>
                        <div className="home-post-img">
                            <img src="/images/posts/5.png"/>
                        </div>
                    </div>

                </div>
                <div className="home-right">
                    <div className="home-suggestions">
                        <h4>Suggestions For You</h4>
                        <span>See All</span>
                    </div>
                    <div className="suggestions-wrapper">
                        <img src="/images/followers.jpg"/>
                        <div className="suggestions-users">
                            <p>terylucas</p>
                            <span>Followed by terylycas + 2 more</span>
                        </div>
                        <span>Follow</span>
                    </div>
                </div>
            </section>
            {isModalOpen && (
            <ModalStories onClose={closeModal} stories={selectedUser.stories} /> 
            )}
        </div>
    )
}