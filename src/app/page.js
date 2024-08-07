import ImageSlider from "@/components/ImageSlider";
import JuaraSlider from "@/components/JuaraSlider";
import VideoCard from "../components/VideoCard";
import Image from "next/image";
import juara from "/public/juara.png";
import logo from "/public/logo.png";
import blog1 from "/public/blog1.jpg";
import blog2 from "/public/blog2.jpg";

const videos = [
  {
    videoUrl: "https://www.instagram.com/reel/C59wqZYPATc/embed",
    title: "Cuplikan Kelfast di Respati CUP",
    description: "Kelfast meraih juara 2",
  },
  {
    videoUrl: "https://www.instagram.com/reel/Cy5wcemvYjN/embed",
    title: "Cuplikan Kelfast U16 Rosalia CUP",
    description: "Kelfast U16 meraih juara 1",
  },
  {
    videoUrl: "https://www.instagram.com/reel/CqXzRSAjag5/embed",
    title: "Cuplikan Kelfast U20 Ramadhan CUP",
    description: "Group Stage kelfast meraih 3 point",
  },
];

const Page = () => {
  return (
    <div>
      <ImageSlider />
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative max-md:hidden h-auto overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={logo}
                alt={`logo`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="lg:py-24 max-sm:pt-10 max-sm:text-center">
              <h1 className="text-2xl font-extrabold sm:text-4xl text-white">
                PROFESSIONAL FUTSAL TEAM
              </h1>
              <h2 className="font-extrabold max-sm:text-center text-3xl sm:text-4xl text-yellow-400 sm:block">
                KELFAST FC
              </h2>

              <p className="mt-4 sm:text-2xl max-sm:text-center text-lg text-white">
                OFFICIAL PARTNERS SAMPEYAN GROUP
              </p>

              <a
                href="/About"
                className="mt-8 inline-block rounded bg-white px-12 py-3 text-sm font-medium text-green-800 transition hover:bg-blue-dark hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                OUR TEAM
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 max-sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="lg:text-7xl font-extrabold text-yellow-400 text-4xl">
              CHAMPIONS
            </h2>
          </header>
          <JuaraSlider />
        </div>
      </section>
      <div className="bg-blue-light min-h-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-8">VIDEO</h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 justify-center items-center">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Gallery Kelfast fc
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
