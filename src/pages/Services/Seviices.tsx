import "./Services.css";

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
                <p>
                  Engaging audiences with meaningful, high-quality content while
                  developing sales playbooks and sales enablement materials to
                  support your team in driving conversions effectively.
                </p>
              </div>
              <div className="gridbox three">
                <h4>Brand Design</h4>
                <p>Creating compelling and memorable brand identities.</p>
              </div>
              <div className="gridbox four">
                <h4>Social Media Marketing</h4>
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
        </section>
      </main>
    </>
  );
}
