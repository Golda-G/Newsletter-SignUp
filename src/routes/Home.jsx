/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import listicon from "../../assets/images/icon-list.svg"
import deskillustration from "../../assets/images/illustration-sign-up-desktop.svg"
import mobileillustration from "../../assets/images/illustration-sign-up-mobile.svg"


const Home = () => {
  const [email, setEmail] = useState('');
  const [infoTxt, setInfoTxt] = useState("");
  const [error, setError] = useState(null);
  

  let navigate = useNavigate(); 
    const routeChange = () =>
    { 
      if (email != "" && isValid(email)) {
        
      navigate("/successpage/" + email);
      } else if(email == ""){
        setInfoTxt("Valid email address required")
        setError(null)
      }
      
      
    
    }

  
    
    function isValid(email) {
      return /^\S+@\S+\.\S+$/.test(email)
      
    }

    function validateEmail(e) {
      if (!isValid(email)) {
        setError('Email is invalid');
        setInfoTxt("")
      } else if (isValid(email)){
        setError(null);
      } 
      setEmail(e.target.value)
    }

    
    
  return (
    <>
    <div className='sign-up-form first-card'>
      <div className='left-side text-div'>
        <h1 className='header'>Stay updated!</h1>
        <p className='text-p'>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
            <li><img src={listicon}  alt="list icon" /> Product discovery and building what matters</li>
            <li><img src={listicon}  alt="list icon" /> Measuring to ensure updates are a success</li>
            <li><img src={listicon}  alt="list icon" /> And much more!</li>
          </ul>
        <div className='subscribe-input-div'>
            <label htmlFor="email">Email Address</label>
             <em>{infoTxt}</em>
             <br></br>
            <input  
                    className="email-input"
                    type="email"
                    value={email} 
                    placeholder="Enter your email address" 
                    onChange={validateEmail}         
            /> 
            <br></br>
            <button className='sub-btn' onClick={routeChange}> Subscribe to monthly newsletter</button>
            {error && <p style={{color: 'red'}}><em>{error}</em></p>}

        </div>
      </div>

      <div className='right-side img-div' >
        <img src={deskillustration} alt="desktop main image" className="desktop-img"/>
        <img src={mobileillustration} alt="mobile main image" className='mobile-img' />
      </div>
    </div>

    <footer>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
      Coded by <a href="#">Golda Gatsey</a>.
    </div>
  </footer>
    </>
  )
}

export default Home