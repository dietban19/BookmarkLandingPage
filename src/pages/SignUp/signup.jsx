import React, { useState } from "react";
import "./signup.css";

const signup = () => {
  const [email, setEmail] = useState(null);
  const handleError = (n, message = "error", type = "add") => {
    const target = document.getElementById(`${n}`);
    target.parentElement.nextElementSibling.innerHTML = message;
    target.parentElement.parentElement.classList[type]("inputWrapperErr");
    if (type === "add") {
      target.nextSibling.classList["remove"]("hidden");
    } else {
      target.nextSibling.classList["add"]("hidden");
    }
  };
  const validateEmail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(mail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      handleError("email", "Whoops, make sure its an email");
    } else {
      handleError("email", "", "remove");
    }
    console.log(email);
  };
  return (
    <section className="su-wrapper">
      <div className="innerWidth flexColCenter su-container">
        <span className="su-text">35,000+ already joined</span>
        <span className="suTitle">Stay up to date with what we are doing</span>
        <form action="" onSubmit={handleSubmit} className="emailContainer">
          <div className="flexCol inputWrapper">
            <div className="flexCenter inputContainer">
              <input
                type="text"
                id="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img
                className="errIcon hidden"
                src="./images/icon-error.svg"
              ></img>
            </div>
            <span className="flexColCenter errText"></span>
          </div>

          <div className="flexCenter buttonContainer">
            <button type="submit" className="submitButton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default signup;
