import { FaInstagram, FaInstagramSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-grow w-full relative">
      <div className="flex flex-col flex-grow">
        <div className="flex md:h-1/4 border-b-4 justify-center pt-4 pb-6 border-brandCyan items-center mx-8 my-6">
          <h1 className="text-3xl my-4 leading-relaxed md:text-5xl tracking-wide text-blue-950">
            For the sake of cycling.
          </h1>
        </div>
        <section className="-mt-5 tracking-wide mb-auto p-8 md:hidden text-blue-950 leading-relaxed text-xl">
          <h2>
            Two Seas Cyclery is a full-service bike shop in Williamsburg,
            Brooklyn.
          </h2>
          <br></br>
          <p className="leading-relaxed tracking-normal text-lg">
            We take on all types of cycling related projects, working with you
            from start to finish. Whether it's a full custom build or a yearly
            tune up, our shop is about bonding over what matters: experiencing
            the world from a saddle.
            <br></br>
          </p>
        </section>
        <div className="flex flex-col text-lg justify-between md:hidden">
          <div className="leading-loose text-blue-950">
            <h3 className="ml-8">356 South 1st Street</h3>
            <h3 className="ml-8">Brooklyn NY 11211</h3>
            <h3 className="ml-8">Monday - Sunday (11am-7pm)</h3>
            {/* <div className="relative z-10">
              <div className="border-4 absolute"><a href="https://www.instagram.com/twoseasnyc/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare
                className="ml-7 mt-2"
                size="40"
              /></a>
              </div>
            </div> */}
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
                Two Seas Cyclery is a full-service bike shop in Williamsburg,
                Brooklyn.
              </h2>
              <br></br>
              <p className="leading-relaxed tracking-normal text-xl">
                We take on all types of cycling related projects, working with
                you from start to finish. Whether it's a full custom build or a
                yearly tune up, our shop is about bonding over what matters:
                experiencing the world from a saddle.
                <br></br>
              </p>

              <div className="text-lg w-full pt-5 mt-6 border-t border-brandGray leading-relaxed">
                <h3>356 South 1st Street</h3>
                <h3>Brooklyn NY 11211</h3>
                <h3>Monday - Sunday (11am-7pm)</h3>
                {/* <div className="pb-8">
                  <div className="border-4 "><a  href="https://www.instagram.com/twoseasnyc/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare
                    className="-ml-1 mt-2 md:hover:text-brandBlue"
                    size="40"
                  /></a>
                  </div>
                </div> */}
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
