import Link from "next/link";
import Image from "next/image";

const MainPage = () => {
  return (
    <>
      <div className="w-full">
        <nav className="bg-white shadow-lg">
          <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-gray-800 md:text-4xl py-4">
                <Link href="/">Brand</Link>
              </div>
              <div className="md:hidden">
                <button
                  type="button"
                  className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      className="hidden"
                      d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                    />
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:block -mx-2">
              <Link
                href="#"
                className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex bg-white">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Build Your New <span className="text-indigo-600">Idea</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base md:py-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates. Cumque debitis dignissimos id quam vel!
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className=" lg:block lg:w-1/2 ">
            <div className="h-full object-cover">
              <Image
                src={
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
                }
                className="rounded"
                alt="cualquier cosa"
                width={900}
                height={900}
              />
              {/* <div className="h-full bg-black opacity-25"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
