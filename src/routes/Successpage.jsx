/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom"
import successicon from "../../assets/images/icon-success.svg"
import * as images from "./media"

const Success = () => {
  const { email } = useParams()

  let navigate = useNavigate(); 
    const routeChange = () =>
    { 
      let path = "/"; 
      navigate(path);
    }
  return (
    <>
    <div className="success-message"> 
      <img className="success-icon" src={successicon} alt="success icon" />
    <h1 className="thanks-for-sub">Thanks for subscribing!</h1>
    <p className="success-text">A confirmation email has been sent to <span id="span-email-placeholder">{email}</span>. 
      Please open it and click the button inside to confirm your subscription.
    </p>
    <button className="dismiss-btn" onClick={routeChange}> Dismiss message</button>
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

export default Success