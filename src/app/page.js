import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import logo from "/public/logo.png";
import juara from "/public/juara.png";
import blog1 from "/public/blog1.jpg";
import blog2 from "/public/blog2.jpg";

const Page = () => {
  return (
    <div>
      <ImageSlider />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="container relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Grow your audience
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-200 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    CHAMPIONS
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  View All
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <li>
                  <a className="group relative block bg-transparent">
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
                            elit. Omnis perferendis hic asperiores quibusdam
                            quidem voluptates doloremque reiciendis nostrum
                            harum. Repudiandae?
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="group relative block ">
                    <Image
                      alt=""
                      src={juara}
                      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                      <p className="text-xl font-bold uppercase tracking-widest text-white">
                        Heatless CUP
                      </p>

                      <p className="text-xl font-bold text-white sm:text-2xl">
                        3rd
                      </p>

                      <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Omnis perferendis hic asperiores quibusdam
                            quidem voluptates doloremque reiciendis nostrum
                            harum. Repudiandae?
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="/Posts" className="group relative block">
                <Image
                  alt=""
                  src={juara}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Casual Trainers
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    View all
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="/Posts" className="group relative block">
                <Image
                  alt=""
                  src={blog1}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Winter Jumpers
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    View all
                  </span>
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="/Posts" className="group relative block">
                <Image
                  alt=""
                  src={blog2}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    View all
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page;
