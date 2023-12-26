'use client'

import HeaderProfile from "@/components/HeaderProfile/HeaderProfile";
import Footer from "@/components/footer/footer";
import Posts from "@/components/posts/posts";

import React, { useState } from 'react'
import { UserProfile } from "@/components/UserPofile";



export default function Profile(){


    let userInfo = 
        {
            username: "terrylucas",
            bio: "Terry Lucas",
            profile_pic: '/images/profile-pic.png',
            stats: {
                posts: 1.258,
                followers: "4M",
                following: 1.250,//?????

            }
        }
    

    const userPosts = [

        {
            url:  '/images/posts/6.png',
            description: '123123',
            id: '1',
        },
        {
            url:  '/images/posts/5.png',
            description: '123123',
            id: '2',
        },
        {
            url:  '/images/posts/4.png',
            description: '123123',
            id: '3',
        },
        {
            url:  '/images/posts/3.png',
            description: '123123',
            id: '4',
        },
        {
            url:  '/images/posts/2.png',
            description: '123123',
            id: '5',
        },
        {
            url:  '/images/posts/1.png',
            description: '123123',
            id: '6',
        },
    
    ]

    let followersInfo = [
        {
            login: 'edenhazard10',
            name: 'Eden Hazard',
            profilePic: '/images/followers.jpg',
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

    const [modalAddIsOpen, setModalAddIsOpen] = useState(false);

    return (
    <div>
        <HeaderProfile openAddWindow={() => setModalAddIsOpen(true)}/>


        <div>
            <UserProfile  userInfo={userInfo} 
            userPosts={userPosts} 
            followersInfo={followersInfo}
            closeAddWindow={() => setModalAddIsOpen(false)}
            modalAddIsOpen={modalAddIsOpen}
            />
            {/* <Posts userPosts={userPosts}/> */}

        </div>
        <Footer/>
    </div>
    )
}