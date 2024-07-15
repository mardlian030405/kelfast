import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";

const About = () => {
  return (
    <div>
      <section className="bg-green-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-white">
                PROFESSIONAL FUTSAL TEAM
              </h2>

              <h2 className="text-3xl font-bold sm:text-4xl text-white">
                KELFAST FC
              </h2>

              <p className="mt-4 text-white">
                OFFICIAL PARTNERS SAMPEYAN GROUP
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                OUR TEAM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;