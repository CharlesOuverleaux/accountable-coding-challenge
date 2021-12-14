import { useState } from "react";
import axios from "axios";
import "./Banner.css";

function Banner() {
    const [userEmail, setUserEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (e) => {
      setUserEmail(e.target.value);
    };

    const toggleState = () => {
      setEmailSent(true);
    }

    async function submitEmail() {
      const data = { email: userEmail };
      const url =
        "https://accountablemuj3pl9f-registerbloglead.functions.fnc.fr-par.scw.cloud";
      await axios.post(url, data).then((response) => {
        if (response.data.message === "ok") {
          toggleState();
        }
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      submitEmail();
    };
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
