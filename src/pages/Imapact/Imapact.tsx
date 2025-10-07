import "./Impact.css";
import gathering from "../../assets/images/impactPicture.svg";

export default function Imapact() {
  return (
    <>
      <section className="impact_even_con">
        <div className="impact_hero_con">
          <h1>Empowering Women-Owned Small Businesses</h1>
          <div className="impact_gatheing_picture">
            <img src={gathering} alt="Gathering" />
          </div>
          <p>
            Our core mission is to drive growth for medium-sized and early-stage
            tech businesses through smart, measurable marketing. Alongside this,
            we commit part of our expertise to women-owned small businesses:
            bakeries, skincare clinics, and creative founders who are shaping
            and sustaining their local communities. By applying the same proven
            tools, strategies, and creative direction used with our larger
            clients, we help these businesses strengthen visibility, earn trust,
            and grow with confidence.
          </p>
        </div>
      </section>

      <section className="impact_action">
        <h2>Impact in Action</h2>
      </section>
    </>
  );
}
