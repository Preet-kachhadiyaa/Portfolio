import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qidpqym", "template_sqpc3wm", form.current, {
        publicKey: "DI9dM14PSlf3R7_ah",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="container-fluid" id="Contact">
        <div className="row my-5">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="contact">
                  <span>Get In Touch</span>
                  <span>Contact Me</span>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="User_Name"
                      placeholder="Name"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Eamil Address"
                      name="User_Email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Some Text Write Here..."
                      name="User_Message"
                      rows="3"
                    ></textarea>
                  </div>
                  <span>{done && "Thanks For Contacting Me..!!!"}</span> <br />
                  <button type="submit" value="send" className="button c-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
