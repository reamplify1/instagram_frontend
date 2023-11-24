'use client'
import UserLogin from "@/components/auth/user/UserLogin";
import HeaderProfile from "@/components/HeaderProfile/HeaderProfile";
import Footer from "@/components/footer/footer";
import Posts from "@/components/posts/posts";
import ModalAdd from "@/components/ModalAdd";
import ModalAddSecond from "@/components/ModalAddSecond";
import React, { useState } from 'react'
export default function Login(){

    const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
    const closeModalAdd = () => {
        setModalAddIsOpen(false)
    }
    const [modalAddSecondIsOpen, setModalAddSecondIsOpen] = useState(false);
    const closeModalAddSecond = () => {
        setModalAddSecondIsOpen(false)
    }

    const userPosts = [

        {
            url:  '/images/posts/6.png',
            description: '123123'
        },
        {
            url:  '/images/posts/5.png',
            description: '123123'
        },
        {
            url:  '/images/posts/4.png',
            description: '123123'
        },
        {
            url:  '/images/posts/3.png',
            description: '123123'
        },
        {
            url:  '/images/posts/2.png',
            description: '123123'
        },
        {
            url:  '/images/posts/1.png',
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
            <button onClick={() => setModalAddIsOpen(true)}>New Post</button>
            <button onClick={() => setModalAddSecondIsOpen(true)}>222</button>
        </div>
        <div>
            <Posts userPosts={userPosts} description={userPosts}/>
            {modalAddIsOpen && <ModalAdd close={closeModalAdd}/>}
            {modalAddSecondIsOpen && <ModalAddSecond closeSecond={closeModalAddSecond}/>}
        </div>
        <Footer/>
    </div>
    )
}