import React from "react";

const Home = () => {
  return (
    <div className="flex flex-grow border-4 border-yellow-500">
      <div className="flex flex-col justify-between flex-grow border-4 border-green-300">
        <div className="flex md:h-2/3 border-8 border-black">
          <h2 className="text-xl p-5 tracking-wider">
            Your shop for bikes & between
          </h2>
        </div>
        <div className="border-4 border-purple-400 lg:hidden">
            HELLO
        </div>
        <div className="flex justify-end md:hidden">
          <img
            className=" border-4 border-red-600 h-auto w-52 lg:w-96"
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
