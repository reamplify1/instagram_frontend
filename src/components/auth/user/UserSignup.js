'use client'
import { useState, useEffect } from "react"
import axios from "axios";
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { createUser } from "@/app/store/slices/authSlice";

import { useSelector, useDispatch } from "react-redux";
import { authorize } from "@/app/store/slices/authSlice";

export default function UserSignup(){
    const isAuth = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        full_name: '',
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
    
      const formSubmit = () => {
        createUser(formData)
        //запрос на сервер
        console.log('Form data submitted:', formData);
        //2 способ без authSlice
        // axios.post('http://195.49.210.193:3001/api/auth/signup', formData)
        // .then((response) => {
        //   // обработка успешного ответа
        //   console.log('Server response:', response.data);
        // })
        // .catch((error) => {
        //   // Обработка ошибки при отправке данных
        //   console.error('Error submitting form:', error);
        // });
      };

      

      useEffect(() => {
        if(isAuth) router.push('/login')
    }, [isAuth])
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
                    <input placeholder="Mobile Number or Email"
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={formChange}/>
                    <input placeholder="Full Name"
                        name="full_name"
                        type="text"
                        value={formData.full_name}
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
               
                    <div>
                        <span>People who use our service may have uploaded your contact information to Instagram. <a href="">Learn more</a></span>
                        <span>By signing up, you agree to our <a href="">Terms, Privacy Policy</a> and <a href="">Cookies Policy.</a></span>
                    </div>
                    <button onClick={formSubmit}>Sign up</button>
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