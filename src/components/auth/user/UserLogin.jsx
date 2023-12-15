'use client'
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { authorize } from "@/app/store/slices/authSlice"

export default function UserLogin(){
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)


    return (
    <section className="login-page">
        
        {isAuth ? 'True' : 'False'}
        <section className="login-main">
            <div className="login-left">
                <img src="/images/screenshot.png"/>
            </div>



            <div className="login-right ">
                <div className="login-box1">
                    <img src="/images/logo.svg"/>
                   
                    <form>
                        <input placeholder="Phone number, username, or email"/>
                        <input placeholder="Password"/>
                    </form>
                    <button 
                        type="button"
                        className="fb-button"
                        onClick={() => dispatch(authorize())}>
                            Log in
                        </button>
                    
                    <div className="grey-line">
                        <div></div>
                        <p>OR</p>
                        <div></div>
                    </div>
                    
                    <a className="link-fb"><img src="/images/fb-logo-mini.png"/>Log in with Facebook</a>
                    <a className="login-pass">Forgot password?</a>
                </div>
                <div className="login-box2">
                    <span>Don't have an account? <Link href="/">Sign up</Link></span>
                </div>
                <div className="login-box3">
                    <span>Get the app.</span>
                    <div className="login-box3-images">
                        <img src="/images/link-google.png"/>
                        <img src="/images/link-microsoft.png"/>
                    </div>
                </div>
              
                
                
                
      
            </div>
        </section>







        <div className="footer">
            <div className="footer-inner">
                <p>Meta</p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Help</p>
                <p>API</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Top Accounts</p>
                <p>Locations</p>
                <p>Instagram Lite</p>
                <p>Contact Uploading & Non-Users</p>
                <p>Meta Verified</p>
            </div>
            <div className="footer-inner">
                <p>English <img src="/images/arrow-down.svg"/></p>
                <span>© 2023 Instagram from Meta</span>
            </div>
        </div>
    </section>
    )
}