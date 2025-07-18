import { Link } from "react-router-dom";
import "./Blog.css";
import faceScreen from "../../assets/images/facescreen.svg";
import arrow from "../../assets/images/arrowblog.svg";

export default function blogPost() {
  const table = [
    { id: 1, description: "DATE", text: "JUNE 21, 2023" },
    { id: 2, description: "CATEGORY", text: "Marketing" },
    { id: 3, description: "READING TIIME", text: "4 Min" },
  ];

  return (
    <>
      <div className="blogpost">
        <div className="blog_grid_container">
          {table.map((item) => (
            <div key={item.id} className="blog_table">
              <span>{item.description}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="blog_post_text_header">
          <h1>
            Introducing Stories by SD: Your Marketing Partner for Growth Without
            the Overhead
          </h1>
          <p className="blog_post_text">
            In today's fast-moving digital world, early-stage tech founders and
            growing businesses face a common dilemma: they need brilliant
            marketing to scale, but don't have the bandwidth, or the budget for
            a full in-house team. That's where <strong>Stories by SD</strong>{" "}
            comes in.
          </p>

          <p>
            We're not just another marketing agency. We're your plug-in growth
            partner—offering{" "}
            <strong>
              big-brand thinking, startup speed, and results-driven execution
            </strong>{" "}
            without the bloated costs or complex retainers. Whether you're
            building traction, launching a new product, or refreshing your
            brand, we make sure your marketing tells a story that sticks.
          </p>
          <button className="blogPostBtn">
            <div className="custume_arrow">
              <img src={arrow} alt="arrow" />
            </div>{" "}
            READ MORE
          </button>
          <img src={faceScreen} alt="avatar" className="facescreen" />
        </div>

        <div className="why_we_exist">
          <div className="why_socials">
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram"></i>
          </div>
          <div className="why_content">
            <div className="exist">
              <h1>Why We Exist</h1>
              <p>
                We launched Stories by SD for one reason: to make exceptional
                marketing accessible to ambitious businesses that are too early
                for a full-time team, but too busy to keep doing it all
                themselves.
              </p>
              <p>
                Led by a senior marketer with over a decade of experience
                (including six years in tech), we bring the strategic thinking
                and creative firepower needed to get your brand noticed, your
                product understood, and your message consistent—across every
                touchpoint.
              </p>
            </div>

            <div className="offer">
              <h1>What We Offer</h1>
              <p>
                At Stories by SD, we act as your fractional marketing team,
                seamlessly embedding into your business and scaling support as
                needed. Our services include:
              </p>
              <ol role="list">
                <li>Brand Strategy & Positioning</li>
                <li>Content Marketing & Social Media</li>
                <li>Website & SEO Support</li>
                <li>Go-to-Market & Launch Campaigns</li>
                <li>Communications & Thought Leadership</li>
                <li>Founder Storytelling & Advisory</li>
              </ol>
              <p>
                We work with you to identify quick wins, build marketing
                foundations, and launch campaigns that drive visibility,
                engagement, and trust.
              </p>
            </div>

            <div className="offer">
              <h1>Who We Work With</h1>
              <p>We're here for:</p>
              <ol role="list">
                <li>
                  Early-stage tech founders building MVPs, looking for market
                  traction, or preparing for investment
                </li>
                <li>
                  Medium-sized businesses with lean marketing teams that need
                  strategic support or campaign execution
                </li>
                <li>
                  Mission-driven brands with bold ideas and a desire to scale
                  sustainably and authentically
                </li>
              </ol>
              <p>
                If you're tired of one-size-fits-all agencies or trying to
                juggle content, strategy, socials, and comms on your own—let's
                talk. We know how to cut through the noise, clarify your
                message, and make every marketing pound (or dollar) work harder.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="odd_container footer_bg_color footer_blog">
          <div className="footer_width footer_blog_con">
            <h1>Let's Build Your Story</h1>
            <p>
              At Stories by SD, we believe that great marketing starts with a
              great story—and we're here to help you tell yours.
            </p>
            <p>
              Ready to scale smart, not scrappy?{" "}
              <strong className="strong">
                Let's write your next chapter—together.
              </strong>
            </p>
            <Link to={"/contact"}>
              <button className="button footer_button">
                <span>Get in touch</span>
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
