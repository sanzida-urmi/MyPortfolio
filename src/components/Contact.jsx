import React from 'react';
import SectionWrapper from './SectionWrapper';
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      className=" font-display"
    >
      <div className="pb-20 px-6 sm:px-10 mt-20">
        <p className="text-sm mb-10 font-semibold tracking-widest text-white uppercase">
          Get Ready to Create Great
        </p>

        <div className="flex sm:gap-20 gap-10 flex-col md:flex-row-reverse justify-center items-center">
          <div className="w-full flex justify-center items-center center">
            <div className="sm:space-y-6 space-y-2 w-full text-center text-lg sm:text-2xl">
             <div>
                <p className="sm:text-sm text-xs text-white text-subtext-light dark:text-subtext-dark">
                  Contact:
                </p>
                <p className="font-medium sm:text-xl text-sm text-white">01329427224</p>
              </div>

              <div>
                <p className="sm:text-sm text-xs text-white text-subtext-light dark:text-subtext-dark">
                  Location:
                </p>
                <p className="font-medium sm:text-xl text-sm text-white">Faridpur,Dhaka</p>
              </div>

              
 <div>
                <p className="sm:text-sm text-xs text-white text-subtext-light dark:text-subtext-dark">
                  E-mail:
                </p>
                <p className="font-medium sm:text-xl text-sm text-white break-all">
                  mostsanzidakhatun752@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            
            <form
              className="space-y-4"
              action="https://formspree.io/f/xnnezdge"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
className="
w-full
bg-[#0f0f12]
border border-white/10
rounded-xl

text-white
placeholder-gray-500
backdrop-blur-xl
transition-all duration-300
focus:outline-none
focus:border-orange-500/60
focus:ring-2
focus:ring-orange-500/40 sm:text-lg text-sm sm:py-3 py-2 sm:px-4 px-2
focus:shadow-[0_0_20px_rgba(255,0,80,0.3)]
"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                />
                <input
className="
w-full
bg-[#0f0f12]
border border-white/10
rounded-xl
sm:text-lg text-sm sm:py-3 py-2 sm:px-4 px-2
text-white
placeholder-gray-500
backdrop-blur-xl
transition-all duration-300
focus:outline-none
focus:border-orange-500/60
focus:ring-2
focus:ring-orange-500/40
focus:shadow-[0_0_20px_rgba(255,0,80,0.3)]
"
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
className="
w-full
bg-[#0f0f12]
border border-white/10
rounded-xl
sm:text-lg text-sm sm:py-3 py-2 sm:px-4 px-2
text-white
placeholder-gray-500
backdrop-blur-xl
transition-all duration-300
focus:outline-none
focus:border-orange-500/60
focus:ring-2
focus:ring-orange-500/40
focus:shadow-[0_0_20px_rgba(255,0,80,0.3)]
"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
                <input
className="
w-full
bg-[#0f0f12]
border border-white/10
rounded-xl
sm:text-lg text-sm sm:py-3 py-2 sm:px-4 px-2
text-white
placeholder-gray-500
backdrop-blur-xl
transition-all duration-300
focus:outline-none
focus:border-orange-500/60
focus:ring-2
focus:ring-orange-500/40
focus:shadow-[0_0_20px_rgba(255,0,80,0.3)]
"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <div>
                <textarea
className="
w-full
bg-[#0f0f12]
border border-white/10
rounded-xl
sm:text-lg text-sm sm:py-3 py-2 sm:px-4 px-2
text-white
placeholder-gray-500
backdrop-blur-xl
transition-all duration-300
focus:outline-none
focus:border-orange-500/60
focus:ring-2
focus:ring-orange-500/40
focus:shadow-[0_0_20px_rgba(255,0,80,0.3)]
"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="pt-4">

<button
  className="
  w-full
  inline-block
  mt-0 mr-4 
  relative overflow-hidden
  bg-black sm:text-lg text-sm
  border-2 border-orange-700
  font-bold py-2 px-5
  rounded-full
  transition-all duration-300
  hover:-translate-y-1
  hover:border-orange-500
  hover:shadow-[0_0_25px_rgba(255,165,0,0.6)]
  active:scale-95
  "
>
  <span className="flex items-center justify-center gap-2 text-white relative z-10">
    Send Message <IoIosSend size={20} sm:size={15} />
  </span>
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
