import "./Services.css";

import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <main>
        <section className="hero_container">
          <div className="even_container">
            <h1 className="fs_800">
              Content <span className="span1">that connects,</span> <br />
              <span className="span2">campaigns that </span>convert
            </h1>

            <p className="fs_500">
              We understand the challenges of scaling a startup. That's why our
              approach is rooted in frugality and efficiency, ensuring that
              every strategy we build is as resourceful as it is impactful. Let
              us help you simplify your marketing journey while amplifying your
              brand's presence and influence.
            </p>
          </div>
        </section>

        <section>
          <div className="even_container">
            <h3 className="fs_600"> We specialize in</h3>
            <div className="grid_container">
              <div className="gridbox one">
                <h4>Overarching Marketing and Communications Strategy:</h4>
                <p>
                  Crafting comprehensive, strategic roadmaps designed to align
                  with your unique goals, drive measurable results, and ensure
                  long-term success through actionable and tailored solutions.
                </p>
              </div>
              <div className="gridbox two">
                <h4>Content Marketing</h4>
                <span className="zero_opacity">.</span>
                <p>
                  Engaging audiences with meaningful, high-quality content while
                  developing sales playbooks and sales enablement materials to
                  support your team in driving conversions effectively.
                </p>
              </div>
              {/* Bottom row: wraps 3 cards in a flex container */}
              <div className="bottom_row">
                <div className="gridbox three">
                  <h4>Brand Design</h4>
                  <span className="zero_opacity">.</span>
                  <p>Creating compelling and memorable brand identities.</p>
                </div>
                <div className="gridbox four">
                  <h4>Social Media Marketing</h4>
                  <span className="zero_opacity">.</span>
                  <p>
                    Building and nurturing online communities that amplify your
                    reach.
                  </p>
                </div>
                <div className="gridbox five">
                  <h4>Search Engine Marketing (SEO + Paid Advertising)</h4>
                  <p>
                    Driving visibility and traffic through targeted campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="even_container additional_services">
            <h3 className="fs_600">Additional Services</h3>
            <p className="fs_500">(Through Trusted Partners)</p>

            <div className="marketing_cards_container">
              <div className="market_card one ">
                <h4>Email Marketing</h4>
                <p>
                  Connect with your audience effectively through tailored,
                  high-performing campaigns that drive engagement and lasting
                  results.
                </p>
              </div>
              <div className="market_card two">
                <h4>Public Relations</h4>
                <p>
                  Enhance your reputation, foster strong media relationships,
                  and create lasting connections for long-term success.
                </p>
              </div>
              <div className="market_card three">
                <h4>Website Design</h4>
                <p>
                  Transform your brand with a custom, responsive, and
                  user-friendly website that engages your audience seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="odd_container">
            <div className="work_with_us_grid_container">
              <div className="work_grid one">
                <h2>Work With Us in 3 Easy Steps</h2>
              </div>
              <div className="work_grid two">
                <h3>Book a Discovery Call</h3>
                <p>
                  Schedule a free, no-obligation call to discuss your goals,
                  challenges, and vision. We'll take the time to understand your
                  unique needs and explore how we can help.
                </p>
              </div>
              <div className="work_grid three">
                <h3>Develop a Custom Strategy</h3>
                <p>
                  Based on our conversation, we'll craft a tailored marketing
                  communications plan to achieve your objectives. You'll receive
                  a clear roadmap with actionable steps and measurable outcomes.
                </p>
              </div>
              <div className="work_grid four">
                <h3>Launch and Refine Together</h3>
                <p>
                  Once you approve the plan, we'll execute it with precision.
                  We'll keep you updated at every stage, making adjustments as
                  needed to ensure maximum results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="odd_container footer_bg_color">
          <div className="footer_width">
            <h1>Let's craft a powerful story for your brand together.</h1>
            <p>
              Ready to see the impact of a strong marketing strategy? Request a
              consultation today!
            </p>
            <Link to={"/contact"}>
            <button className="button footer_button"><span>Get in touch</span></button>
          </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
