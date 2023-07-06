import React from "react";

const Contact = () => {
  return (
    <div className="relative w-full h-fit mt-5">
      <div className="flex flex-grow justify-center">
        <section>
          <div className="px-5 py-10 mx-auto w-full">
            <div className="flex flex-col text-center w-full mb-5">
              <h1 className="sm:text-3xl text-2xl mb-4 text-blue-950">
                Drop a line
              </h1>
              <br></br>
              <br></br>
              <h2 className="text-2xl">We want to hear from you.</h2>
            </div>

            <div className="lg:w-1/2 mt-14 md:w-2/3 mx-auto">
              <form action="https://formsubmit.co/info@twoseasnyc.com" method="POST" >
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div>
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-brandGray"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-box"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div>
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-brandGray"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-box"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div>
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-brandGray"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-box"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-brandBlue border-0 py-2 px-8 focus:outline-none hover:bg-blue-950 rounded text-lg">
                      Send
                    </button>
                  </div>
                </div>
              </form>

              <div className="p-2 w-full pt-4 mt-14 border-t border-brandGray text-center">
                <a className="text-indigo-500">twoseasnyc@gmail.com</a>
                <p className="leading-normal">
                  356 South 1st Street
                  <br />
                  Brooklyn NY 11211
                </p>
              </div>
              {/* <div className="w-full block lg:hidden">
                <iframe
                  width="100%"
                  height="300"
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=356%20S%201st%20St%20suite%201+(Two%20Seas%20Cyclery)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/distance-area-calculator.html">
                    measure acres/hectares on map
                  </a>
                </iframe>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <style>
        {`
          .relative::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("images/Two Seas Mascot Logo 1.png");
            background-size: cover;
            background-position: center;
            opacity: 0.3;
            z-index: -1;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
