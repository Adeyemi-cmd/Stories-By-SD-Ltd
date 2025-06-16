import "./About.css";

// images
import Picture from "./../../assets/images/Picture.svg";
import Icon from "./../../assets/images/icon.svg";

export default function About() {
  return (
    <>
      <main>
        <section>
          <div className="about_container1">
            <div className="about_container2">
              <div className="left_container1">
                <img src={Icon} alt="icon" />
                <h1>Simplifying Marketing, Amplifying Impact</h1>
              </div>
              <div className="right_container1">
                <div>
                  <p>
                    At Stories, we believe that growing businesses deserve
                    marketing solutions as dynamic and ambitious as their
                    vision. That's why we specialise in creating bespoke
                    marketing strategies that align perfectly with your
                    objectives, empowering you to focus on building your
                    business while we take care of building your brand.
                  </p>
                </div>

                <div>
                  <p>
                    Our tagline, Simplifying Marketing, Amplifying Impact,
                    captures the essence of what we do: providing
                    cost-effective, tailor-made marketing solutions that deliver
                    measurable results without compromising on quality or
                    creativity. By leveraging our expertise and deep
                    understanding of the startup ecosystem, we help you make the
                    most of every marketing spend, achieving maximum impact at a
                    fraction of the cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="picture_even_container">
            <div className="picture_container">
              <img src={Picture} alt="Picture"/>
            </div>
            <div className="text_container">
              <h3>Principal Consultant</h3>
              <p>
                At Stories, we understand the challenges of scaling a startup.
                That's why our approach is rooted in frugality and efficiency,
                ensuring that every strategy we build is as resourceful as it is
                impactful. Let us help you simplify your marketing journey while
                amplifying your brand's presence and influence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
