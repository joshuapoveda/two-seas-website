import React from "react";

const Home = () => {
  return (
    <div className="flex flex-grow border-4 border-yellow-500">
      <div className="flex flex-col flex-grow border-4 border-green-300">
        <div className="flex md:h-2/3 border-8 border-black">
          <h2 className="text-xl pl-4 py-2 tracking-wider">
            The shop for everything bikes & between
          </h2>
        </div>
        <div className="border-4 mt-10 border-purple-400 md:hidden">
            Two seas cycling is a custom, full-service bike shop on Metropolitan Ave in Brooklyn.
            <br></br>
            Located a few minutes from the Williamsburg bridge, come by and check out the shop.
            <br></br>
            Hours: M-F (9am-9pm)
            <br></br>
            Address: 356 S 1st Street, Brooklyn, NY, 11211

        </div>
        <div className="flex justify-end md:hidden">
          <img
            className=" border-4 mt-10 border-red-600 h-auto w-52 lg:w-96"
            src="images/Two Seas Mascot Logo 1.png"
            alt="Image Description"
          />
        </div>

        <div className="hidden md:flex flex-grow border-4 border-cyan-800">
          <div className="flex border-4 border-purple-600 flex-grow">
            <div className="sm:flex border-4 hidden border-teal-300 sm:w-96 md:w-2/4">
              <p>HELLO</p>
            </div>
            <div className="flex border-4 border-orange-400 flex-grow justify-end">
              <img
                className="border-4 border-blue-600 h-auto sm:h-96 w-auto md:w-96"
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
