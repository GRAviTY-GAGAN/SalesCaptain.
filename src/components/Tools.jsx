import "./Tools.css";

const Tools = () => {
  const toolsDetails = [
    {
      name: "Attract",
      desc: "Attract more customers",
      tools: [
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg",
          name: "Reviews",
          desc: "Improve ratings & get chosen more.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg",
          name: "Listings",
          desc: "Improve listings & get seen more.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg",
          name: "Marketing",
          desc: "Reach out to customers on text & email.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg",
          name: "SmartPages",
          desc: "Engage more with our AI SEO.",
        },
      ],
    },
    {
      name: "Engage",
      desc: "Convert leads to customers",
      tools: [
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg",
          name: "WebChat",
          desc: "Convert leads on website chat with our AI.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg",
          name: "Messaging",
          desc: "Engage with customers across all channels.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg",
          name: "Referrals",
          desc: "Let your customers refer you.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg",
          name: "Payments",
          desc: "Modernize your integrated payment tools",
        },
      ],
    },
    {
      name: "Elevate",
      desc: "Provide a delightful experience",
      tools: [
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg",
          name: "Captain AI",
          desc: "Improve ratings & get chosen more.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg",
          name: "Feedback & survey",
          desc: "Improve listings & get seen more.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg",
          name: "Competition & Insights",
          desc: "Reach out to customers on text & email.",
        },
        {
          img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg",
          name: "Customer Manager",
          desc: "Engage more with our AI SEO.",
        },
      ],
    },
  ];

  return (
    <div className="Tools__mainCont">
      <div className="Tools__heading">
        <h1>Tools to take your business to next level</h1>
      </div>
      <div className="Tools__ToolsCont">
        {toolsDetails.map((tools, i) => (
          <div key={i} className="Tools__Tool">
            <div className="Tools__ToolsHeading">
              <h1>{tools.name}</h1>
              <p>{tools.desc}</p>
            </div>
            <div>
              {tools.tools.map((tool, i) => (
                <div key={i} className="Tools__SingleTool">
                  <img src={tool.img} alt={tool.name} />
                  <div>
                    {" "}
                    <h2>{tool.name}</h2>
                    <p>{tool.desc}</p>
                  </div>
                </div>
              ))}

              {/* <div className="Tools__SingleTool">
                <img
                  src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg"
                  alt="Listings"
                />
                <div>
                  <h2>Listings</h2>
                  <p>Improve listings & get seen more.</p>
                </div>
              </div>
              <div className="Tools__SingleTool">
                <img
                  src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg"
                  alt="Marketing"
                />
                <div>
                  <h2>Marketing</h2>
                  <p>Reach out to customers on text & email.</p>
                </div>
              </div>
              <div className="Tools__SingleTool">
                <img
                  src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg"
                  alt="SmartPages"
                />
                <div>
                  <h2>SmartPages</h2>
                  <p>Engage more with our AI SEO.</p>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
