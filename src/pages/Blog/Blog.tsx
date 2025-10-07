import { Link } from "react-router-dom";
import "./Blog.css";
// import HoverEffect from "../../components/HoverEffect/HoverEffect";

// import vemus1 from "../../assets/images/venus1.svg";
// import vemus2 from "../../assets/images/venus2.svg";
// import vemus3 from "../../assets/images/venus3.svg";
// import human from "../../assets/images/human.svg";
import minCom from "../../assets/images/miniCom.svg";
import Arrrow from "../../assets/images/arrowblog.svg";

export default function Blog() {
  // const cards = [
  //   {
  //     id: 1,
  //     image: vemus1,
  //     description:
  //       "Creating a Consistent Brand Identity Across All Touchpoints",
  //     buttonText: "Read",
  //     bg_color: "#E9E5F3",
  //   },
  //   {
  //     id: 2,
  //     image: vemus2,
  //     description:
  //       "Creating a Consistent Brand Identity Across All Touchpoints",
  //     buttonText: "Read",
  //     bg_color: "#F9F9F9",
  //   },
  //   {
  //     id: 3,
  //     image: vemus3,
  //     description:
  //       "Creating a Consistent Brand Identity Across All Touchpoints",
  //     buttonText: "Read",
  //     bg_color: "#E0EDF5",
  //   },
  // ];

  const posts = [
    {
      id: 1,
      image: minCom,
      description:
        "Introducing Stories by SD: Your Marketing Partner for Growth Without the Overhead",
      pText:
        "In today's fast-moving digital world, early-stage tech founders and growing businesses face a common dilemma: they need brilliant marketing to scale, but don’t have the bandwidth, or the budget for a full in-house team. That's where Stories by SD comes in.",
      readMoreBtn: "Read More",
      icon: Arrrow,
      path: "/blog/post-1",
    },
    {
      id: 2,
      image: minCom,
      description:
        "Introducing Stories by SD: Your Marketing Partner for Growth Without the Overhead",
      pText:
        "In today's fast-moving digital world, early-stage tech founders and growing businesses face a common dilemma: they need brilliant marketing to scale, but don’t have the bandwidth, or the budget for a full in-house team. That's where Stories by SD comes in.",
      readMoreBtn: "Read More",
      icon: Arrrow,
      path: "/blog/post-1",
    },
    {
      id: 3,
      image: minCom,
      description:
        "Introducing Stories by SD: Your Marketing Partner for Growth Without the Overhead",
      pText:
        "In today's fast-moving digital world, early-stage tech founders and growing businesses face a common dilemma: they need brilliant marketing to scale, but don’t have the bandwidth, or the budget for a full in-house team. That's where Stories by SD comes in.",
      readMoreBtn: "Read More",
      icon: Arrrow,
      path: "/blog/post-1",
    },
    {
      id: 4,
      image: minCom,
      description:
        "Introducing Stories by SD: Your Marketing Partner for Growth Without the Overhead",
      pText:
        "In today's fast-moving digital world, early-stage tech founders and growing businesses face a common dilemma: they need brilliant marketing to scale, but don’t have the bandwidth, or the budget for a full in-house team. That's where Stories by SD comes in.",
      readMoreBtn: "Read More",
      icon: Arrrow,
      path: "/blog/post-1",
    },
  ];

  return (
    <>
      <section>
        <div className="blog_container">
          <div className="blog_flexBox">
            {posts.map((eachCon) => (
              <div className="blog_content" key={eachCon.id}>
                <div className="blog_image">
                  <img src={eachCon.image} alt="computer preview" />
                </div>
                <div className="blog_text">
                  <h1>{eachCon.description}</h1>
                  <p>{eachCon.pText}</p>
                  <Link to={eachCon.path} className="blog_link">
                    <button className="blog_btn">
                      {eachCon.readMoreBtn}{" "}
                      <img src={eachCon.icon} alt="arrow_icon" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="latest_news_container">
          <div className="latest_news_text">
            <h4>Latest news</h4>
          </div>

          <div className="card_grid">
            {cards.map((card) => (
              <div
                key={card.id}
                className="card"
                style={{ background: card.bg_color }}
              >
                <HoverEffect>
                  <img src={card.image} alt="" className="card_image" />
                </HoverEffect>
                <h3>{card.description}</h3>
                <Link to="/blog/post" className="card_link">
                  <button className="card_btn">{card.buttonText}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
