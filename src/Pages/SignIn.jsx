import { useState } from "react";
import "./SignIn.css";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import logo from "../assets/salesCaptian-icon.png";
import { UnlockTwoTone, LockTwoTone } from "@ant-design/icons";

const SignIn = () => {
  const [text, setText] = useState("password");

  return (
    <div className="SignIn__MainCont">
      <div className="SignIn__form">
        <div className="SignIn__logo">
          <img src={logo} alt="SalesCaptain" />
          <p>SalesCaptain</p>
        </div>
        <div className="SignIn__login">Login</div>
        <div className="SignIn__loginInputsCont">
          <input type="email" placeholder="Email" />
        </div>
        <div>
          {text == "password" ? (
            <div className="SignIn__loginInputsCont">
              <input type={text} placeholder="Password" />
              <button onClick={() => setText("text")} className="SignInIcons">
                <UnlockTwoTone
                  style={{ fontSize: "30px", color: "#08c" }}
                  theme="outlined"
                />
              </button>
            </div>
          ) : (
            <div className="SignIn__loginInputsCont">
              <input type={text} placeholder="Password" />
              <button
                onClick={() => setText("password")}
                className="SignInIcons"
              >
                <LockTwoTone
                  style={{ fontSize: "30px", color: "#08c" }}
                  theme="outlined"
                />
              </button>
            </div>
          )}
        </div>
        <button className="signInBTN">Sign In</button>
        <p className="forgotPass">Forgot Password</p>
      </div>
    </div>
  );
};

export default SignIn;
