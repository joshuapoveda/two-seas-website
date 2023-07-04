import React from "react";

const Home = () => {
  return (
    <div className="flex flex-grow">
      <div className="flex flex-col flex-grow ">
        <div className="flex md:h-1/4 border-b-4 border-brandCyan items-center m-5 ">
          <h1 className="text-2xl my-4 leading-relaxed md:text-5xl tracking-wide text-blue-950">
            For the sake of cycling.
          </h1>
        </div>
        <section className="-mt-5 tracking-wide mb-auto p-5 md:hidden text-blue-950 leading-relaxed text-lg">
          <h2>
            Two seas cyclery is a full-service bike shop in Williamsburg,
            Brooklyn.
          </h2>
          <br></br>
          <p>
            Between repairs and custom builds, we got your back.
            <br></br>
          </p>
        </section>
        <div className="flex flex-col justify-between md:hidden">
          <div>
            <br></br>
            <br></br>
            <h3 className="-mt-10 ml-5">356 South 1st Street</h3>
            <br></br>
            <br></br>
            <h3 className="ml-5">Brooklyn NY 11211</h3>
          </div>
          <div className="-mt-24 z-0">
            <img
              className="mt-24 ml-auto h-auto w-52 lg:w-96"
              src="images/Two Seas Mascot Logo 1.png"
              alt="Image Description"
            />
          </div>
        </div>

        <div className="hidden md:flex flex-grow ">
          <div className="flex flex-grow">
            <div className="p-5 sm:flex hidden sm:w-96 md:w-2/4 text-blue-950">
              Two seas cycling is a custom, full-service bike shop on
              Metropolitan Ave in Brooklyn.
              <br></br>
              Located a few minutes from the Williamsburg bridge, come by and
              check out the shop.
              <br></br>
              Hours: M-F (9am-9pm)
              <br></br>
              Address: 356 S 1st Street, Brooklyn, NY, 11211
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
