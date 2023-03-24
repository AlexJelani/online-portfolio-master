import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary py-20" id="contact">
    <div className="text-center md:-[-60%] mx-auto text-white">
      <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
        Contact Me
      </h2>
      <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iure numquam perspiciatis 
        maxime vitae mollitia,
         possimus voluptas impedit neque sunt?</p>
         <p className="py-2"><span className="font-bold">Email:</span>jelanialexander@ymail.com</p>
      <form action="https://formsubmit.co/jelanialexander82@gmail.com" method="POST">
              <label for="name" className="text-white" key="INPUTNAME">Name</label>
              <input type="text" name="name" required />
              <input type="hidden" name="_next" value="https://www.alexander-jelani.me/thankyou.html" />
              <input type="hidden" name="_captcha" value="false" />
              <label for="email" class="lang" key="EMAIL" className="text-white">Email:</label>
              <input type="email" name="email" required />
              <label for="subject" class="lang" key="SUBJECT" className="text-white">Subject:</label>
              <input type="text" name="subject" id="subject" />
              <label for="message" class="lang" key="MESSAGE" className="text-white">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" required></textarea>
              <input type="submit" name="submit" value="submit" class="lang" key="SUBMIT" />
          </form>
    </div>
    </section>
  );
};

export default Contact;
