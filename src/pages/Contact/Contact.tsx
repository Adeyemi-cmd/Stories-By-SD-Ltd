import "./Contact.css";

export default function Contact() {
  return (
    <>
      <main>
        <section>
          <div className="contact_max_width_container">
            <div className="contact_text">
              <h1>Book A Discovery Call</h1>
              <p>
                From planning to execution, we're here to help you achieve your
                marketing goals.
              </p>
            </div>

            <form>
              <label>NAME</label>
              <input type="text" placeholder="Your Name" />
              <label>Email Address</label>
              <input type="email" placeholder="Your Email" />
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
              ></textarea>{" "}
              <button className="contact_button">Send message</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
