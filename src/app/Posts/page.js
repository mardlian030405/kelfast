// src/app/page.js
import Card from "@/components/Card";

export default function HomePage() {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl: "/juara.png",
    },
    {
      id: 2,
      title: "Card 2",
      content:
        "This is the second card absolute inset-0 h-full w-full object-cover lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl: "/blog1.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw.",
      imageUrl: "/blog2.jpg",
    },
    {
      id: 4,
      title: "Card 1",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl: "/juara.png",
    },
    {
      id: 5,
      title: "Card 2",
      content:
        "This is the second card absolute inset-0 h-full w-full object-cover lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw",
      imageUrl: "/blog1.jpg",
    },
    {
      id: 6,
      title: "Card 3",
      content:
        "lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus dhgahehbfheahvcvejvfjvjbeahfefwfbwbfbyvuw.",
      imageUrl: "/blog2.jpg",
    },
    // Tambahkan lebih banyak kartu jika diperlukan
  ];

  return (
    <div>
      <header className="bg-gray-50 pt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, Barry!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Let's write a new blog post! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
