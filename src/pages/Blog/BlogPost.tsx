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
          <img src={faceScreen} alt="avatar" />
        </div>
      </div>
    </>
  );
}
