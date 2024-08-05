import "./Intro.css";
import profession from "../assets/profession.jpg";

const Intro = () => {
  return (
    <div className="Intro__mainCont">
      <div className="Intro__leftCont">
        <h1>Best way to grow your local business</h1>
        <p>
          Artificial Intelligence powered easy-to-use tools to get more
          customers & give them a better experience
        </p>
        <div className="Intro__Demo">
          <input type="text" /> <button>GET DEMO</button>
        </div>
      </div>
      <div className="Intro__ImgCont">
        <img src={profession} alt="Profession" />
      </div>
    </div>
  );
};

export default Intro;
