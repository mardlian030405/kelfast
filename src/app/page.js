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

      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 max-sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="lg:text-7xl font-bold text-white text-4xl font-serif">
              CHAMPIONS
            </h2>
          </header>

          <div className="lg:col-span-2 lg:py-8 max-sm:pt-10">
            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <a href="/Posts" className="group relative block">
                <article className="group">
                  <Image
                    alt=""
                    src={juara}
                    className="h-full w-full rounded-xl object-cover shadow-xl"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      KELFAST U23
                    </h3>
                    <h3 className="text-2xl font-bold text-white">
                      2nd RESPATI CUP
                    </h3>
                  </div>
                </article>
              </a>

              <a href="/Posts" className="group relative block">
                <article className="group">
                  <Image
                    alt=""
                    src={juara}
                    className="h-full w-full rounded-xl object-cover shadow-xl"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      KELFAST U23
                    </h3>
                    <h3 className="text-2xl font-bold text-white">
                      3rd Heatless CUP
                    </h3>
                  </div>
                </article>
              </a>
            </ul>
          </div>
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
