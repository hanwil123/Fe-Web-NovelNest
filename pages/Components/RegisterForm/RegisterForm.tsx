import { FooterIcon } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
export default function RegisterForm() {
  return (
    <>
      <div className="flex-col w-screen h-screen ">
        <div className=" bg-blue-500 w-full h-full flex items-center">
          <form className=" w-[500px] mx-auto bg-yellow-400 px-10 py-10">
            <div className="mb-3 space-y-2 ">
              <div className=" flex justify-center">
                <img
                  src="/novelnestlogo.png"
                  className=" w-[100px] h-[100px]"
                  alt=""
                />
              </div>

              <input
                type="text"
                id="namalengkap"
                className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div className="mb-3 space-y-2 ">

              <input
                type="text"
                id="notelp"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nomer Telpon"
                required
              />
            </div>
            <div className="mb-3 space-y-2 ">

              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 space-y-2">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-start mb-3">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray- text-center300"
              >
                Remember me
              </label>
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
            <div className=" flex flex-col items-center justify-center py-2 space-y-3">
              <div className=" flex flex-row space-x-2">
                <p className=" text-black">Belum punya akun? </p>

                <a href="/Components/LoginForm/LoginForm">
                  <p className=" text-black">Login</p>
                </a>
              </div>
              <div className=" ">
                <p className=" text-black">login with</p>
              </div>
              <div className=" flex flex-row space-x-3">
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsInstagram} />
                <FooterIcon href="#" icon={BsTwitter} />
                <FooterIcon href="#" icon={BsGithub} />
                <FooterIcon href="#" icon={BsDribbble} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
