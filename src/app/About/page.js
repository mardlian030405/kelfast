import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import juara from "/public/juara.png";

const About = () => {
  return (
    <div>
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-auto overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="lg:py-24 max-sm:pt-10">
              <h2 className="text-2xl font-bold sm:text-3xl text-white">
                PROFESSIONAL FUTSAL TEAM
              </h2>

              <h2 className="text-2xl font-bold sm:text-4xl text-white">
                KELFAST FC
              </h2>

              <p className="mt-4 text-xl text-white">
                OFFICIAL PARTNERS SAMPEYAN GROUP
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-white px-12 py-3 text-sm font-medium text-green-800 transition hover:bg-blue-dark hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                OUR TEAM
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-light">
        <h2 className="text-3xl font-bold pt-12 text-center text-white sm:text-4xl">
          History KELFAST FC
        </h2>
        <div className="flex mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="background relative bg-blue-light h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="flex items-center lg:py-16">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
              <div className="space-y-4">
                <details
                  className="group border-s-4 border-green-700 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    hic veritatis molestias culpa in, recusandae laboriosam
                    neque aliquid libero nesciunt voluptate dicta quo officiis
                    explicabo consequuntur distinctio corporis earum similique!
                  </p>
                </details>

                <details className="group border-s-4 border-blue-dark bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    hic veritatis molestias culpa in, recusandae laboriosam
                    neque aliquid libero nesciunt voluptate dicta quo officiis
                    explicabo consequuntur distinctio corporis earum similique!
                  </p>
                </details>

                <details className="group border-s-4 border-blue-dark bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    hic veritatis molestias culpa in, recusandae laboriosam
                    neque aliquid libero nesciunt voluptate dicta quo officiis
                    explicabo consequuntur distinctio corporis earum similique!
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-white sm:text-3xl">
              Product Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            <li>
              <a className="group relative block bg-black">
                <Image
                  alt=""
                  src={juara}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-xl font-medium uppercase tracking-widest text-white">
                    RESPATI CUP
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    2nd
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="group relative block bg-black">
                <Image
                  alt=""
                  src={juara}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-xl font-medium uppercase tracking-widest text-white">
                    RESPATI CUP
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    2nd
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="group relative block bg-black">
                <Image
                  alt=""
                  src={juara}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-xl font-medium uppercase tracking-widest text-white">
                    RESPATI CUP
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    2nd
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
