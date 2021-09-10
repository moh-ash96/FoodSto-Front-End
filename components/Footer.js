import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 mt-20 ">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
          style={{ transform: "translateZ(0)" }}
        >

          <hr className="w-11/12 my-6 ml-20 border-blueGray-300"  />
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                        <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://foodsto-api.herokuapp.com/admin/">Admin</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="#"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="#"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-blueGray-500">
                Copyright © {new Date().getFullYear()} Mohammad Ahsour.</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}