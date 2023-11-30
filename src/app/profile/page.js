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

    return (
    <div>
        <HeaderProfile />

        <div>
            <UserProfile  userInfo={userInfo} userPosts={userPosts}/>
            <Posts userPosts={userPosts}/>
     
        </div>
        <Footer/>
    </div>
    )
}