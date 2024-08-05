import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer1__mainCont">
        <h1>Ready to grow?</h1>
        <p>
          See why 100,000+ businesses trust us. Book a personalized demo to see
          how SalesCaptain provides you the right tools to grow your business.
        </p>
        <div className="Footer1__InputCont">
          <input type="text" placeholder="ENTER YOUR EMAIL" />
          <button>GET DEMO</button>
        </div>
        <div>
          <div className="Footer1__imgCont">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp"
              alt="Stars"
            />{" "}
            <span>500+ Reviews</span>
          </div>
          <div className="Footer1__img2Cont">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp"
              alt="Google"
            />
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp"
              alt="Capterra"
            />
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp"
              alt="Software Advice"
            />
          </div>
        </div>
      </div>
      <div className="Footer2__mainCont">
        <div>
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp"
            alt="Logo"
          />
        </div>
        <div className="hide">
          <p>Products</p>
          <div>Reviews</div>
          <div>Listing</div>
          <div>Marketing</div>
          <div>WebBoost</div>
          <div>Referrals</div>
          <div>Payments</div>
        </div>
        <div className="hide">
          <div>WebChats</div>
          <div>Messaging</div>
          <div>Captain AI</div>
          <div>Feedback & Survey</div>
          <div>Competitions & Insights</div>
          <div>Customer Manager</div>
        </div>
        <div className="hide">
          <p>Industry</p>
          <div>Healthcare</div>
          <div>Dental</div>
          <div>Home Services</div>
          <div>Retail</div>
          <div>Hospitality</div>
          <div>Automotive</div>
          <div>Restaurents</div>
          <div>Wellness</div>
          <div>Professional Services</div>
        </div>
        <div>
          <div className="hide">
            <p>Partner</p>
            <div>Become a Partner</div>
            <p>Company</p>
          </div>
          <div>
            <div>Contact</div>
            <div>Careers</div>
            <div>Press</div>
            <div>Partners</div>
            <div>Legal</div>
          </div>
        </div>
        <div>
          <p>US Headquarters</p>
          <div>447 Broadway, 2nd Floor, New York 10013</div>
          <p>India office</p>
          <div>1467 Janani HSR Layout Bengaluru Karnataka 560102</div>
          <p>London office</p>
          <div>79 - 81 Borough Rd London England 400706</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
