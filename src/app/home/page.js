'use client'
import HeaderProfile from "@/components/HeaderProfile/HeaderProfile"
import React from "react"

export default function Home ({followersInfo}) {
    return(
        <div>
            <HeaderProfile/>
            <section className="home">
                <div className="home-left">
                    <div className="home-stories">
                        {/* {followersInfo.map((follower, index) => (
                        <div key={index} className="story-item">
                            <img src={follower.profilePic} alt={follower.name} />
                            <p>{follower.name}</p>
                        </div>
                        ))} */}
                        {/* <div className="stories-border"> */}
                            <div className="story-item">
                                <img src="/images/followers.jpg"/>
                                <span>lauramatt</span>
                            </div>
                           
                        {/* </div> */}
                    
                        <div className="story-item">
                            <img src="/images/followers.jpg"/>
                            <span>lauramatt</span>
                        </div>
                        <div className="story-item">
                            <img src="/images/followers.jpg"/>
                            <span>lauramatt</span>
                        </div>
                        <div className="story-item">
                            <img src="/images/followers.jpg"/>
                            <span>lauramatt</span>
                        </div>
                        <div className="story-item">
                            <img src="/images/followers.jpg"/>
                            <span>lauramatt</span>
                        </div>
                        <div className="story-item">
                            <img src="/images/followers.jpg"/>
                            <span>lauramatt</span>
                        </div>
                        <div className="story-item">
                            <img src="/images/followers.jpg"/>
                            <span>lauramatt</span>
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
                    <div>

                    </div>
                </div>
            </section>
        </div>
    )
}