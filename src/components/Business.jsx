import "./Business.css";
import Tilt from "react-parallax-tilt";

const Business = () => {
  const businesses = [
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg",
      name: "Healthcare",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7c6aace717f0cd9c6b_Group%2018674.svg",
      name: "Dental",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ee724d71235537f0b_Group%2018681.svg",
      name: "Home Services",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d9f7f1bb4a89eedec_Group%2018675.svg",
      name: "Retail",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ddd5081b753e27b8c_Group%2018676.svg",
      name: "Hospitality",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d132cbe948c251a1b_Group%2018677.svg",
      name: "Automotive",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e919312d89de_Group%2018678.svg",
      name: "Restaurents",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e13ffea380326cf92_Group%2018679.svg",
      name: "Wellness",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e9d49c2d89dd_Group%2018680.svg",
      name: "Professional Services",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b11439eedef_Group%2018682.svg",
      name: "Care Services",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7eee175fd8089febf1_Group%2018683.svg",
      name: "Financial Services",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b73679eedee_Group%2018684.svg",
      name: "Recreational Services",
    },
  ];
  return (
    <div className="Business__MainCont">
      <div className="Business__Heading">
        <h1>SalesCaptain is designed for your business</h1>
        <p>Select your industry to see how it works</p>
      </div>
      <div className="Business__BusinessCont">
        {businesses.map((item, i) => (
          <Tilt
            key={i}
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.7}
            glareColor="lightblue"
            glarePosition="all"
            scale={1.02}
            className="Business__SingleBusiness"
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Business;
