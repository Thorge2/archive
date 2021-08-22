import { Link } from "solid-app-router";

export default function Home() {
  return (
    <main class="md:flex pt-20 bg-gradient-to-tr from-gray-300 to-gray-100 h-screen">
      <div class="md:w-1/2 md:p-10 flex justify-center">
        <div class="w-1/2 lg:mt-24">
          <h1 class="font-bold md:text-6xl mb-5 text-4xl">Welcome!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            dolorum ad ea. Facere saepe voluptas non impedit magni consequuntur
            assumenda architecto laboriosam laborum autem mollitia asperiores
            necessitatibus, sed, quos cupiditate.
          </p>
          <Link
            href="/about"
            class="inline-block bg-pink-500 mt-5 p-3 rounded shadow"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div class="md:w-1/2 md:p-10 hidden md:inline-block">
        <div class="rounded shadow-xl bg-gradient-to-tr from-gray-400 to-gray-500">
          <img
            src="bookshelf.jpg"
            alt="bookshelf"
            width="1000"
            class="rounded"
          />
        </div>
      </div>
    </main>
  );
}
