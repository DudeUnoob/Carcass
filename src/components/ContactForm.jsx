import "../components/ContactFormStyles.css";

function ContactForm() {
  return (
    <>
      <div className="form-container">
        <h1>Email me!</h1>
        <p>@dom</p>
        <a href="mailto:techdomprogramming@gmail.com">Email Me</a>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
