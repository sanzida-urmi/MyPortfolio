import React from 'react';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      className="bg-background-light dark:bg-background-dark font-display"
    >
      <div className="min-h-screen p-6 sm:p-8">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          Get Ready to Create Great
        </p>

        <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
          <div className="w-full flex justify-center items-center center">
            <div className="space-y-6 w-full">
              <div>
                <p className="text-sm text-black text-subtext-light dark:text-subtext-dark">
                  E-mail:
                </p>
                <p className="font-medium text-black">
                  mostsanzidakhatun752@gmail.com
                </p>
              </div>
              <div>
                <p className="text-sm text-black text-subtext-light dark:text-subtext-dark">
                  Location:
                </p>
                <p className="font-medium text-black">Faridpur,Dhaka</p>
              </div>
              <div>
                <p className="text-sm text-black text-subtext-light dark:text-subtext-dark">
                  Contact:
                </p>
                <p className="font-medium text-black">01329427224</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-bold text-center text-text-light dark:text-text-dark mb-8 tracking-wider">
              GET IN TOUCH
            </h2>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xnnezdge"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="w-full bg-surface-light dark:bg-surface-dark border-none rounded-lg py-3 px-4 text-text-light dark:text-text-dark placeholder-subtext-light dark:placeholder-subtext-dark focus:ring-2 focus:ring-primary"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="w-full bg-surface-light dark:bg-surface-dark border-none rounded-lg py-3 px-4 text-text-light dark:text-text-dark placeholder-subtext-light dark:placeholder-subtext-dark focus:ring-2 focus:ring-primary"
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    className="w-full bg-surface-light dark:bg-surface-dark border-none rounded-lg py-3 px-4 text-text-light dark:text-text-dark placeholder-subtext-light dark:placeholder-subtext-dark focus:ring-2 focus:ring-primary"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
                <input
                  className="w-full bg-surface-light dark:bg-surface-dark border-none rounded-lg py-3 px-4 text-text-light dark:text-text-dark placeholder-subtext-light dark:placeholder-subtext-dark focus:ring-2 focus:ring-primary"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <div>
                <textarea
                  className="w-full bg-surface-light dark:bg-surface-dark border-none rounded-lg py-3 px-4 text-text-light dark:text-text-dark placeholder-subtext-light dark:placeholder-subtext-dark focus:ring-2 focus:ring-primary"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  className="w-full bg-primary text-text-light font-bold py-4 px-6 rounded-full flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                  type="submit"
                >
                  <span className="text-black">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
