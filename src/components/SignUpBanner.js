import "./SignUpBanner.css";
import useSignUpBanner from "../hooks/useSignUpBanner";

function SignUpBanner({ toggleEmailSubmissionState }) {
  const { handleChange, handleSubmit } = useSignUpBanner(
    toggleEmailSubmissionState
  );

  return (
    <div className="SignUpBanner">
      <div className="SignUpBanner__content">
        <form className="SignUpBanner__form" onSubmit={handleSubmit}>
          <input
            className="SignUpBanner__input"
            type="email"
            placeholder="Your email address"
            onChange={handleChange}
            required
          />
          <button type="submit" className="SignUpBanner__button"></button>
        </form>
      </div>
    </div>
  );
}

export default SignUpBanner;
