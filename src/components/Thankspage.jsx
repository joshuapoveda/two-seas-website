import React from "react";

const Thankspage = () => {
  return (
    <div className="pb-10  w-full flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <img
          className="md:w-60 w-44 md:mt-32 mt-8"
          src="images/Two Seas Mascot Logo 2.png"
          alt="Image Description"
        />
        <div className="mt-3 flex flex-col items-center">
          <h2 className="text-xl">Thank you</h2>
          <h4 className="text-lg">We'll get back to you soon.</h4>
        </div>
      </div>
    </div>
  );
};

export default Thankspage;
