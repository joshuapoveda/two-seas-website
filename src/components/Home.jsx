import React from "react";

const Home = () => {
  return (
    <div className="flex flex-grow ">
      <div className="flex flex-col flex-grow ">
        <div className="flex md:h-1/4 border-b-4 border-brandCyan items-center m-4">
          <h2 className="text-xl md:text-3xl pl-4 py-2 tracking-wider">
            The shop for everything bikes & in between
          </h2>
        </div>
        <div className="mt-10  p-5 md:hidden">
          Two seas cycling is a custom, full-service bike shop on Metropolitan
          Ave in Brooklyn.
          <br></br>
          Located a few minutes from the Williamsburg bridge, come by and check
          out the shop.
          <br></br>
          Hours: M-F (9am-9pm)
          <br></br>
          Address: 356 S 1st Street, Brooklyn, NY, 11211
        </div>
        <div className="flex justify-end md:hidden">
          <img
            className=" mt-24 h-auto w-52 lg:w-96"
            src="images/Two Seas Mascot Logo 1.png"
            alt="Image Description"
          />
        </div>

        <div className="hidden p-5 md:flex flex-grow ">
          <div className="flex flex-grow">
            <div className="sm:flex hidden sm:w-96 md:w-2/4">
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
            <div className="flex mt-auto  flex-grow justify-end">
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
