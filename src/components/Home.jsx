import React from "react";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="flex flex-grow w-full">
      <div className="flex flex-col flex-grow">
        <div className="flex md:h-1/4 border-b-4 justify-center pt-4 pb-6 border-brandCyan items-center mx-8 my-6">
          <h1 className="text-3xl my-4 leading-relaxed md:text-5xl tracking-wide text-blue-950">
            For the sake of cycling.
          </h1>
        </div>
        <section className="-mt-5 tracking-wide mb-auto p-8 md:hidden text-blue-950 leading-relaxed text-xl">
          <h2>
            Two seas cyclery is a full-service bike shop in Williamsburg,
            Brooklyn.
          </h2>
          <br></br>
          <p className="leading-relaxed tracking-normal text-lg">
            We take on all types of cycling related projects, working with you
            from start to finish. Wether it's a full custom build or a yearly
            tune up, our shop is about bonding over what matters: seeing the
            world from a saddle.
            <br></br>
          </p>
        </section>
        <div className="flex flex-col text-lg justify-between md:hidden">
          <div>
            <h3 className="ml-8">
              Address: 356 S 1st Street, Brooklyn, NY, 11211
            </h3>
            <br></br>
            <h3 className="ml-8">356 South 1st Street</h3>
            <br></br>
            <h3 className="ml-8">Brooklyn NY 11211</h3>
            <br></br>
            <h3 className="ml-8">Hours: M-F (9am-9pm)</h3>
          </div>
          <div className="-mt-24 z-0">
            <img
              className="mt-24 ml-auto h-auto w-52 lg:w-96"
              src="images/Two Seas Mascot Logo 1.png"
              alt="Image Description"
            />
          </div>
        </div>

        <div className="hidden md:flex flex-grow ml-4">
          <div className="flex flex-grow">
            <div className="px-8 py-4 sm:flex hidden sm:w-96 md:w-2/3 text-blue-950 flex-col">
              <h2 className="text-3xl">
                Two seas cyclery is a full-service bike shop in Williamsburg,
                Brooklyn.
              </h2>
              <br></br>
              <p className="leading-relaxed tracking-normal text-xl">
                We take on all types of cycling related projects, working with
                you from start to finish. Wether it's a full custom build or a
                yearly tune up, our shop is about bonding over what matters:
                seeing the world from a saddle.
                <br></br>
              </p>

              <div className="w-full pt-6 mt-6 border-t border-brandGray">
                <a className="text-brandBlue text-lg">twoseasnyc@gmail.com</a>
                <p className="leading-normal text-lg">
                  356 South 1st Street
                  <br />
                  Brooklyn NY 11211
                </p>
              </div>
            </div>
            <div className="flex mt-auto flex-grow justify-end">
              <img
                className="justify-end  h-auto sm:h-96 w-auto md:w-96"
                src="images/Two Seas Mascot Logo 1.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
