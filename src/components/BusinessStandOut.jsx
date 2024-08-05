import "./BusinessStandOut.css";

const BusinessStandOut = () => {
  const standOutDetails = [
    {
      name: "Get discovered by more customers",
      desc: "Higher reviews & better listings make you more discoverable to people organically",
      link: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp",
    },
    {
      name: "Faster conversion with our Captain AI",
      desc: "Automate web chat, messaging, reviews & feedbacks with our AI assistant",
      link: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp",
    },
    {
      name: "Marketing that works for you",
      desc: "Run highly effective & targeted campaigns on text & emails and put your customer data to use",
      link: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp",
    },
    {
      name: "Training & Support",
      desc: "Talk to a dedicated relationship manager to get the help you need. No wait time, a dedicated line just for you.",
      link: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222.webp",
    },
  ];

  return (
    <div className="BusinessStandOut__mainCont">
      <div className="BusinessStandOut__heading">
        <h1>Make your business stand out with us</h1>
      </div>
      <div className="BusinessStandOut__CardsmainCOnt">
        {standOutDetails.map((item, i) => (
          <div key={i} className="BusinessStandOut__Card">
            <div>
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
              <h3>{item.link}</h3>
            </div>
            <div className="BusinessStandOut__CardImgCont">
              <img src={item.img} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessStandOut;
