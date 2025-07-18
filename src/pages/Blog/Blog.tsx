import { Link } from "react-router-dom";
import "./Blog.css";
import HoverEffect from "../../components/HoverEffect/HoverEffect";

import Blogavatar from "../../assets/images/blogavatar.svg";
import vemus1 from "../../assets/images/venus1.svg";
import vemus2 from "../../assets/images/venus2.svg";
import vemus3 from "../../assets/images/venus3.svg";
import Arrrow from "../../assets/images/arrowblog.svg";

export default function Blog() {
  const cards = [
    {
      id: 1,
      image: vemus1,
      description:
        "Creating a Consistent Brand Identity Across All Touchpoints",
      buttonText: "Read",
      bg_color: "#E9E5F3",
    },
    {
      id: 2,
      image: vemus2,
      description:
        "Creating a Consistent Brand Identity Across All Touchpoints",
      buttonText: "Read",
      bg_color: "#F9F9F9",
    },
    {
      id: 3,
      image: vemus3,
      description:
        "Creating a Consistent Brand Identity Across All Touchpoints",
      buttonText: "Read",
      bg_color: "#E0EDF5",
    },
  ];

  return (
    <>
      <section>
        <div className="blog_container">
          <div className="blog_header">
            <div className="blog_image">
              <img src={Blogavatar} alt="Blogavatar" />
            </div>
            <div className="blog_text">
              <small>SOCIAL MEDIA</small>
              <h3>The Importance of a Strong Brand Positionint</h3>
              <p>
                Having a strong brand positioning is crucial for any business
                looking to stand out in the market and achieve its business
                objectives.
              </p>
              <Link to="/blog/post" className="blogLink">
                <button className="blogbtn">
                  Read More <img src={Arrrow} alt="arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
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
      </section>
    </>
  );
}
