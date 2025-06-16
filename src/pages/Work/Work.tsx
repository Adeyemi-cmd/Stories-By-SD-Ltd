import "./Work.css";
// images
import Logo1 from "../../assets/images/Logo1.svg";
import Logo2 from "../../assets/images/Logo2.svg";
import Logo3 from "../../assets/images/Logo3.svg";
import Logo4 from "../../assets/images/Logo4.svg";
import Logo5 from "../../assets/images/Logo5.svg";
import Logo6 from "../../assets/images/Logo6.svg";
import Logo7 from "../../assets/images/Logo7.svg";
import Logo8 from "../../assets/images/Logo8.svg";
import Profile1 from "../../assets/images/Profile1.svg";
import Profile2 from "../../assets/images/Profile2.svg";
import Profile3 from "../../assets/images/Profile3.svg";
import Profile4 from "../../assets/images/Profile4.svg";
import Profile5 from "../../assets/images/Profile5.svg";
import Profile6 from "../../assets/images/Profile6.svg";

export default function Work() {
  return (
    <>
      <main>
        <section>
          <div className="work_even_container">
            <div className="work_text">
              <p>
                Our team brings over 15 years of combined experience, spanning
                enterprise organisations to fast-growing startups.
              </p>
            </div>

            <div className="work_grid_container">
              <div className="work_grid_card color1">
                <img src={Logo1} alt="" />
              </div>
              <div className="work_grid_card color2">
                <img src={Logo2} alt="" />
              </div>
              <div className="work_grid_card color3">
                <img src={Logo3} alt="" />
              </div>
              <div className="work_grid_card color4">
                <img src={Logo4} alt="" />
              </div>
              <div className="work_grid_card color5">
                <img src={Logo5} alt="" />
              </div>
              <div className="work_grid_card color6">
                <img src={Logo6} alt="" />
              </div>
              <div className="work_grid_card color7">
                <img src={Logo7} alt="" />
              </div>
              <div className="work_grid_card color8">
                <img src={Logo8} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="work_profile_even_container">
            <h1>What clients say about us</h1>

            <div className="work_profile_grid">
              <div className="work_profile">
                <div className="work_profile_text">
                  <img src={Profile1} alt="Profile" />
                  <div className="work_text">
                    <h4>Jessica Rich</h4>
                    <small>Vice President of Business Development</small>
                  </div>
                </div>
                <h3>Detailed!</h3>
                <p>
                  From brand development to creating awareness, Stories
                  collaborates with you to develop a look and feel unique to
                  your business. They have an exceptional ability to create a
                  brand story and strategy to connect with your target
                  customers. No detail is left behind!
                </p>
              </div>
              <div className="work_profile">
                <div className="work_profile_text">
                  <img src={Profile2} alt="Profile" />
                  <div className="work_text">
                    <h4>Anthony Underwood</h4>
                    <small>
                      Head of Bioinformatics, Broken String Biosciences
                    </small>
                  </div>
                </div>
                <h3>Energetic & Experienced!</h3>
                <p>
                  Moyo brings a remarkable combination of energy, creativity,
                  and expertise to their work. Her deep understanding of
                  effective marketing strategies allows her to craft compelling
                  digital and physical solutions that effectively communicate
                  key company messages. Moyo's ability to balance a fun
                  personality with focused determination makes her not only
                  highly effective but also a pleasure to work alongside. I
                  wholeheartedly recommend her.
                </p>
              </div>
              <div className="work_profile">
                <div className="work_profile_text">
                  <img src={Profile3} alt="Profile" />
                  <div className="work_text">
                    <h4>Francis Osifo</h4>
                    <small>Co-founder & CEO, Rayda</small>
                  </div>
                </div>
                <h3>Strong business acumen!</h3>
                <p>
                  I have worked with Moyo across multiple companies and she is
                  exceptional in her work, process and how she manages
                  stakeholders across the process. She was instrumental in
                  helping me and the team clarify our messaging and brand
                  positioning post-launch and has continued to support us
                  through our journey. She is methodical and focuses on
                  delivering clear outcomes in every engagement.
                </p>
              </div>
              <div className="work_profile">
                <div className="work_profile_text">
                  <img src={Profile4} alt="Profile" />
                  <div className="work_text">
                    <h4>Dave taylor</h4>
                    <small>CEO - Total one logistics inc</small>
                  </div>
                </div>
                <h3>Boosted our traffic!</h3>
                <p>
                  I've worked with several SEO consultants, but Stories stands
                  out for their strategic approach and attention to detail. They
                  provided actionable insights, fixed technical SEO issues, and
                  created a content strategy that has significantly boosted our
                  organic traffic.
                </p>
              </div>
              <div className="work_profile">
                <div className="work_profile_text">
                  <img src={Profile5} alt="Profile" />
                  <div className="work_text">
                    <h4>Felicia Ajose</h4>
                    <small>Operations Manager, Amazon Pathways</small>
                  </div>
                </div>
                <h3>A delight to work with!</h3>
                <p>
                  Moyo consistently gave more than 100%. Her contributions
                  surpassed that of her role! She aided in building and
                  sustaining different functional teams. Her critical thinking
                  and problem solving skills played an integral role in strategy
                  and operations development as needed for the growing startup.
                </p>
              </div>
              <div className="work_profile">
                <div className="work_profile_text">
                  <img src={Profile6} alt="Profile" />
                  <div className="work_text">
                    <h4>Gatumi Aliyu</h4>
                    <small>Co-founder /Chief Product Officer, Vendease</small>
                  </div>
                </div>
                <h3>Strategic & clear!</h3>
                <p>
                  Moyo has an exceptional talent for crafting clear, compelling
                  marketing strategies tailored to a compan's growth phase. At
                  Vendease, her strategic insights and ability to streamline our
                  messaging allowed us to focus on scaling while she built a
                  results-driven marketing framework. Moyosola is the expert to
                  trust for businesses needing cost-effective and bespoke
                  marketing solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
