import "../components/ContactFormStyles.css";

function SignupForm() {
  return (
    <>
      <div className="form-container">
        <h1>Signup</h1>
        <p><i>This doesn't work it's only here for the sake of it</i></p>
        <form>
          <input placeholder="Username" required/>
          <input placeholder="Email" required/>
          <button>Signup</button>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
