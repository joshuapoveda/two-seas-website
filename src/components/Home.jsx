import React from "react";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="flex flex-grow w-full">
      <div className="flex flex-col flex-grow">
        <div className="flex md:h-1/4 border-b-4 justify-center pt-4 pb-6 border-brandCyan items-center mx-8 my-6">
          <h1 className="text-2xl my-4 leading-relaxed md:text-5xl tracking-wide text-blue-950">
            For the sake of cycling.
          </h1>
        </div>
        <section className="-mt-5 tracking-wide mb-auto p-8 md:hidden text-blue-950 leading-relaxed text-lg">
          <h2>
            Two seas cyclery is a full-service bike shop in Williamsburg,
            Brooklyn.
          </h2>
          <br></br>
          <p>
            We offer repairs, custome builds, and biking goods.
            <br></br>
          </p>
        </section>
        <div className="flex flex-col justify-between md:hidden">
          <div>
            <br></br>
            <h3 className="ml-8">Hours: M-F (9am-9pm)</h3>
            <br></br>
            <h3 className="ml-8">Address: 356 S 1st Street, Brooklyn, NY, 11211</h3>
            <br></br>
            <h3 className="ml-8">356 South 1st Street</h3>
            <br></br>
            <h3 className="ml-8">Brooklyn NY 11211</h3>
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
            <div className="p-8 sm:flex hidden sm:w-96 md:w-2/4 text-blue-950 flex-col">
              <h2 className="mb-24">
                Two seas cycling is a full-service bike shop.
                <br></br>
                Located a few minutes from the Williamsburg bridge, come by and
                check out the shop.
                <br></br>
              </h2>
              <h3 >
                Hours: M-F (9am-9pm)
                <br></br>
                Address: 356 S 1st Street, Brooklyn, NY, 11211
              </h3>
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
