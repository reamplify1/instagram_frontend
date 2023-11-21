'use client'


export default function HeaderProfile(){
    return (
    <div className="header-profile-container">
        <div className="header-profile-logo">
            <img src="/images/instagram-logo.svg"/>
        </div>
        <div className="header-profile-search">
            <form className="header-search">
                <img src="/images/search.svg" alt=""/>
                <input type="text" placeholder="Search" name="search" id=""/>
            </form>
                
        </div>
        <div className="header-profile-navigation">
            <img src="/images/navigation/nav1.png"/>
            <img src="/images/navigation/nav2.png"/>
            <img src="/images/navigation/nav3.png"/>
            <img src="/images/navigation/nav4.png"/>
            <img src="/images/navigation/nav5.png"/>
            <img src="/images/navigation/nav6.png"/>
        </div>
    </div>
    )
}