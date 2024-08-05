import "./Testimonials.css";

const Testimonials = () => {
  const details = [
    {
      name: "Simon Page",
      image:
        "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp",
      position: "Owner, Mamagato Restaurant",
      desc: `“In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn"`,
      percent: "40%",
      percentDesc: "Average net profit increase",
      ProductsUsed: ["Messaging", "webChat", "Reviews", "Listing", "Referrals"],
    },
    {
      name: "Daniel Wilson",
      image:
        "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp",
      position: "Marketing head, The Air Conditioning Company",
      desc: `“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”`,
      percent: "200%",
      percentDesc: "New review growth",
      ProductsUsed: [
        "Reviews",
        "Listing",
        "Messaging",
        "webChat",
        "Customer Manager",
      ],
    },
    {
      name: "Debbie Rose",
      image:
        "https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp",
      position: "Owner, Jiva luxury Spa",
      desc: `“Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks”`,
      percent: "$150k",
      percentDesc: "Generated with marketing campaign",
      ProductsUsed: [
        "marketing",
        "webChat",
        "Review",
        "Messaging",
        "Competition & Insights",
      ],
    },
  ];

  return (
    <div className="Testimonials__mainCont">
      <div className="Testimonials__Heading">
        <h1>Testimonials</h1>
      </div>
      <div>
        {details.map((detail, i) => (
          <div key={i} className="Testimonials__Testimonials">
            <div>
              <div>
                <div className="Testimonials__Img">
                  <img src={detail.image} alt={detail.name} />
                </div>
              </div>
              <div>
                <div>
                  <div className="Testimonial__Name">
                    <h3>{detail.name}</h3>
                    <p>{detail.position}</p>
                  </div>
                  <p className="Testimonial__Desc">{detail.desc}</p>
                </div>
                <div className="Testimonial__PercentMainCont">
                  <div>
                    <h1>{detail.percent}</h1>
                    <p>{detail.percentDesc}</p>
                  </div>
                  <div className="Testimonials__ProductsUsed">
                    <p className="productsUsed">Products used:</p>
                    <div className="Testimonials__ProductsCont">
                      {detail.ProductsUsed.map((product, index) => (
                        <div key={index} className="Testimonials__product">
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
