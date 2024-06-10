

import "./index.css";

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const BACKEND_BASE_URL = "https://castellum-mvp.azurewebsites.net/api/employees";


const SignIn = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {

    if (id) {
      const meetingId = id;
      console.log(meetingId);
      console.log("clicked")
      let url = `${BACKEND_BASE_URL}/phishing/campaigns/${meetingId}/clicked/`;
      fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      }
      )
    }
  }
  , [id]);

  function handleClick(e) {
    console.log("Joining meeting")
    console.log("compromised")
    const meetingId = id;
      console.log(meetingId);
      let url = `${BACKEND_BASE_URL}/phishing/campaigns/${meetingId}/compromised/`;
      fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      }
      )
  }

  return (
    <div>
      <img className="logo" src="/LinkedIn.png" alt="LinkedIn" />
      <div className="wrapper">
        <div className="container">
          <img className="logo2" src="/LinkedIn.png" alt="LinkedIn" />
          <h3 style={{ marginBottom: "5px", fontSize: "1.2rem" }}>Sign In</h3>
          <p>Stay updated on your professional world</p>
          <div className="input">
            <input type="text" placeholder="Email" className="email-input" />
            <input
              type="password"
              placeholder="Password"
              className="password-input"
            />
          </div>
          <p style={{ color: "#008fce" }}>Forget Password?</p>
          <button className="signin" onClick={handleClick}>Sign in</button>
          <div className="divider">
            <hr style={{ width: "200px" }} />
            <p>or</p>
            <hr style={{ width: "200px" }} />
          </div>
          <div className="link" onClick={handleClick}>
            <img width="20px" src="/link.png" alt="link" />
            <p>Sign in with a one time link</p>
          </div>
          <div className="agreement">
            <p>
              By clicking continue, you agree to LinkedIn's
              <span>
                <a style={{ color: "#008fce" }} href="www.example.com">
                  user Agreement
                </a>
              </span>
              ,{" "}
              <span>
                <a style={{ color: "#008fce" }} href="www.example.com">
                  Privacy Policy
                </a>
              </span>
              and
              <span>
                <a style={{ color: "#008fce" }} href="www.example.com">
                  Cookie Policy
                </a>
              </span>
            </p>
          </div>
          <div className="link" onClick={handleClick}>
            <img width="20px" src="/google-logo-9824.png" alt="link" />
            <p>Sign in with a one time link</p>
          </div>
          <div className="down">
            <p>&copy;</p>
            <img style={{ width: "50px" }} src="/Linkedin.png" alt="" />
            <p>2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
