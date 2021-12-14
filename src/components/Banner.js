import "./Banner.css";
import useSignUpBanner from "../hooks/useSignUpBanner";

function Banner({ toggleEmailSubmissionState }) {
  const { handleChange, handleSubmit } = useSignUpBanner(
    toggleEmailSubmissionState
  );

  return (
    <div className="Banner">
      <div className="Banner__content">
        <form className="Banner__form" onSubmit={handleSubmit}>
          <input
            className="Banner__input"
            type="email"
            placeholder="Your email address"
            onChange={handleChange}
            required
          />
          <button type="submit" className="Banner__button"></button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
