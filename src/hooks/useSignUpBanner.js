import { useState } from "react";
import axios from "axios";

const useSignUpBanner = (toggleEmailSubmissionState) => {
  const [userEmail, setUserEmail] = useState("");

  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };

  async function submitEmail() {
    const data = { email: userEmail };
    const url =
      "https://accountablemuj3pl9f-registerbloglead.functions.fnc.fr-par.scw.cloud";
    await axios.post(url, data).then((response) => {
      console.log(response.data);
      if (response.data.message === "ok") {
        toggleEmailSubmissionState();
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEmail();
  };

  return { handleChange, handleSubmit };
};

export default useSignUpBanner;
