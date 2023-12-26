'use client'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "@/app/store/slices/authSlice"
export default function HeaderProfile({openAddWindow}){
    const [step,setStep] = useState(0)
    const router = useRouter()
    const dispatch = useDispatch()
    const toggleModal = () => {
        setStep((condition) => (condition === 1 ? 0 : 1));
      };
    const isAuth = useSelector((state) => state.auth.isAuth)


    useEffect(() => {
        if(!isAuth){
            router.push('/login')
        }
    },[isAuth])
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
            <img src="/images/navigation/nav3.png" onClick={openAddWindow}/>
            <img src="/images/navigation/nav4.png"/>
            <img src="/images/navigation/nav5.png"/>
            <img src="/images/navigation/nav6.png"/>
            
            <div className="logout" onClick={toggleModal}>
                            
                            <div className="logout" >
                                <FontAwesomeIcon onClick={() => 
                                dispatch(logOut())} icon={faRightFromBracket} />
                            </div>
                            {/* {step == 1 && <div className="logout" onClick={() => 
                                dispatch(logOut())}>
                                
                                
                            </div>} */}
            </div>

        </div>
    </div>
    )
}