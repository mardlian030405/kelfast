import React from "react";
import Image from "next/image";
import sponsor1 from "/public/sponsor 1.png";
import sponsor2 from "/public/sponsor 2.png";
import sponsor3 from "/public/sponsorv5.png";
const Sponsor = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Official Partners
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <Image
                  src={sponsor1}
                  alt={`BANNER`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <Image
                  src={sponsor2}
                  alt={`BANNER`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="flex flex-col rounded-lg bg-white px-4 py-8 text-center">
                <Image
                  src={sponsor3}
                  alt={`BANNER`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;
