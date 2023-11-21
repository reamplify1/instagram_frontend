'use client'
import Link from "next/link"
export default function UserSignup(){
    return (
    <section className="signup-page">
        <div className="signup-main">
            <div className="signup-box">
                <img src="/images/logo.svg"/>
                <p>
                    Sign up to see photos and videos from your friends
                </p>
                <button className="fb-button">
                    <img src="/images/facebook-button.svg"/>
                    Log in with Facebook
                </button>
                <div className="grey-line">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <form>
                    <input placeholder="Mobile Number or Email"/>
                    <input placeholder="Full Name"/>
                    <input placeholder="Username"/>
                    <input placeholder="Password"/>
                </form>
                <span>People who use our service may have uploaded your contact information to Instagram. <a href="">Learn more</a></span>
                <span>By signing up, you agree to our <a href="">Terms, Privacy Policy</a> and <a href="">Cookies Policy.</a></span>
                <button>Sign up</button>
            </div>
            <div className="signup-box2">
                <span>Have an account? <Link href="/login">Log in</Link></span>
            </div>
            <div className="signup-box3">
                <span>Get the app.</span>
                <div className="signup-box3-images">
                    <img src="/images/link-google.png"/>
                    <img src="/images/link-microsoft.png"/>
                </div>
                
            </div>
        </div>
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