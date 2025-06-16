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
// import Profile1 from "../../assets/images/Profile1.svg"
// import Profile2 from "../../assets/images/Profile2.svg"
// import Profile3 from "../../assets/images/Profile3.svg"
// import Profile4 from "../../assets/images/Profile4.svg"
// import Profile5 from "../../assets/images/Profile5.svg"
// import Profile6 from "../../assets/images/Profile6.svg"

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
          </div>
        </section>
      </main>
    </>
  );
}
