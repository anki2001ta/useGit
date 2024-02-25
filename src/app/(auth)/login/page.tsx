import { Fragment } from "react";
import Image from "next/image";

const LoginForm = () => {
  return (
    <Fragment>
      <div className="h-screen flex justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#285710] via-[#4c9831] to-[#aedd92]" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Image src="/useFun.png" alt="usefun" width={600} height={600} />
        </div>
        <div className="w-[600px] h-[400px] bg-[#ffffff21] bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg z-10 flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-4 font-semibold text-center text-white  underline-offset-1">
            USEFUN MASTER ADMIN LOGIN
          </h2>
          <form className="space-y-4 w-full max-w-md">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mt-4"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[40px] placeholder-gray-300 text-gray-700 pl-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[40px] placeholder-gray-300 text-gray-700 pl-2"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="mt-4 p-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2f6416] hover:bg-[#4c9831] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4c9831]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
