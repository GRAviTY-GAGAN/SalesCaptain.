import "./Navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import salesIcon from "../assets/salesCaptian-icon.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    "Products",
    "Solutions",
    "Pricing",
    "Resources",
    "Support",
    "Sign In",
  ];
  const [show, setShow] = useState("hide");

  const location = useLocation();

  if (location.pathname == "/signin") {
    navItems[5] = "Home";
  }

  function toggle() {
    if (show == "show") {
      setShow("hide");
    } else {
      setShow("show");
    }
  }

  return (
    <div className="Navbar">
      <div className="Navbar__mainCont">
        <div className="Navbar__Logo">
          <img src={salesIcon} alt="Sales captian icon" />{" "}
          <span>SalesCaptain</span>
        </div>
        {location.pathname == "/" && (
          <div className="Navbar__navItems">
            {navItems.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        )}
        <div className="Navbar__Signin">
          <div>
            {location.pathname !== "/signin" ? (
              <Link to={"/signin"}>Sign in</Link>
            ) : (
              <Link className="Navbar__HOME" to={"/"}>
                Home
              </Link>
            )}
          </div>
          {location.pathname == "/" && <div>Get started</div>}
        </div>
        <div
          className="Hamburger"
          onClick={() => {
            toggle();
          }}
        >
          <MenuOutlined
            style={{ fontSize: "20px", color: "#08c" }}
            theme="outlined"
          />
        </div>
      </div>
      <div className={`Nav__MobNav ${show}`}>
        {navItems.map((item, i) => (
          <div onClick={() => toggle()} key={i}>
            <Link to={item == "Home" ? "/" : "/signin"}>{item}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
