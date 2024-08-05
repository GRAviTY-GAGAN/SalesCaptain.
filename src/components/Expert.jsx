import "./Expert.css";

const Expert = () => {
  const expertDetails = [
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp",
      name: "Google My Business Basics: How to get more customers from GMB.",
      desc: "Customers want to find local proprietors on search engines and nearly 90 percent of that traffic goes to Google.",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp",
      name: "How to use Google's Business Messaging tool to get new customers",
      desc: "Today’s leading businesses aren’t just being found - they’re engaging the moment they’re discovered.",
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp",
      name: "6 Ways to Increase Your Website Traffic and Leads",
      desc: "More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge.",
    },
  ];
  return (
    <div className="Experts__MainCont">
      <div className="Experts__Heading">
        <h1>Expert Insights and Resources</h1>
        <p>
          Get the latest business intelligence relevant to your industry,
          designed to help you grow.
        </p>
      </div>
      <div className="Experts__CardCont">
        {expertDetails.map((item, i) => (
          <div key={i} className="Experts__Card">
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="Expert__foot">View All Resources</h2>
    </div>
  );
};

export default Expert;
