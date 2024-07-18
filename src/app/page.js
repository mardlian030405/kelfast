import ImageSlider from "@/components/ImageSlider";
import JuaraSlider from "@/components/JuaraSlider";
import Image from "next/image";
import juara from "/public/juara.png";
import blog1 from "/public/blog1.jpg";
import blog2 from "/public/blog2.jpg";

const Page = () => {
  return (
    <div>
      <ImageSlider />
      <section className="bg-blue-light">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-1/2 lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-yellow-400 sm:block">
                {" "}
                Increase Conversion.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded items-center bg-white px-12 py-3 text-sm font-medium text-blue-light shadow hover:bg-blue-light hover:text-white focus:outline-none focus:ring  focus:ring-yellow-400  sm:w-auto"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 max-sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="lg:text-7xl font-bold text-white text-4xl font-serif">
              CHAMPIONS
            </h2>
          </header>
          <JuaraSlider />
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collection
            </h2>
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
                  <h3 className="text-xl font-medium text-white">Kelfast</h3>

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
                  <h3 className="text-xl font-medium text-white">kelfast</h3>

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
                  <h3 className="text-xl font-medium text-white">kelfast</h3>

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
