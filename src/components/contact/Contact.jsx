import emailjs from "@emailjs/browser";
import { useRef } from "react";
import pic3 from "../../assets/socialLink/github-logo.png";
import pic2 from "../../assets/socialLink/instagram-logo.png";
import pic1 from "../../assets/socialLink/linkedin-logo.png";
import pic4 from "../../assets/socialLink/youtube-logo.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h5uo7en", "template_2tbvtx2", form.current, {
        publicKey: "eiDmXsEm4Rv8BLRvs",
      })
      .then(
        (result) => {
          e.target.reset();
          alert("Email Send !");
        },
        (error) => {
          console.log("Error : ", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };
  return (
    <section
      id="contact"
      className="m-5 flex flex-col justify-center items-center min-h-screen mb-5 pt-28"
    >
      <div className=" text-white text-center lg:w-3/4 w-full">
        <h1 className="text-5xl text-yellow-500">Contact Me</h1>
        <p className="lg:text-xl text-base my-10">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <div className="w-full flex flex-col justify-center items-center">
          <form
            className="w-full flex flex-col justify-center items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="lg:w-1/2 md:w-3/4 w-full p-3 rounded-full text-black text-lg"
                name="from_name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="lg:w-1/2 md:w-3/4 w-full p-3 rounded-full text-black text-lg"
                name="from_email"
                required
              />
              <textarea
                name="message"
                id=""
                className="lg:w-1/2 md:w-3/4 w-full p-3 h-40 rounded-2xl text-black text-lg"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button className="px-10 py-4 bg-white text-black rounded-3xl transform transition-transform duration-300 hover:scale-90 flex justify-center items-center gap-2 my-10 text-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 my-5">
        <div>
          <a
            href="https://www.linkedin.com/in/siddhant-kumar-tiwari/"
            target="_blank"
          >
            <img
              src={pic1}
              alt="img"
              className="lg:w-16 w-14 rounded-3xl transform transition-transform duration-300 hover:scale-90 "
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src={pic2}
              alt="img"
              className="lg:w-16 w-14  rounded-3xl transform transition-transform duration-300 hover:scale-90"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/siddhantkumartiwari" target="_blank">
            <img
              src={pic3}
              alt="img"
              className="lg:w-16 w-14  rounded-3xl transform transition-transform duration-300 hover:scale-90"
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src={pic4}
              alt="img"
              className="lg:w-16 w-14  rounded-3xl transform transition-transform duration-300 hover:scale-90"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
