import { Link } from "solid-app-router";
import { createSignal, Show } from "solid-js";

export default function Navbar() {
  const [show, setSHow] = createSignal(false);

  return (
    <nav class="fixed top-0 left-0">
      <div class="hidden md:inline-block">
        <div class="flex justify-between items-center w-screen">
          <div class="flex justify-evenly items-center w-full">
            <Link
              href="/"
              class="inline-block bg-sky-200 text-sky-700 hover:bg-sky-300 px-2 py-1 rounded-full shadow"
            >
              Home
            </Link>
            <Link
              href="/about"
              class="inline-block bg-sky-200 text-sky-700 hover:bg-sky-300 px-2 py-1 rounded-full shadow"
            >
              About
            </Link>
          </div>

          <div class="flex justify-end items-center w-1/2">
            <Link
              href="/login"
              class="inline-block bg-gray-400 text-gray-800 hover:bg-gray-300 hover:text-gray-600 p-3 m-4 rounded-full shadow"
            >
              Login
            </Link>
            <Link
              href="/signup"
              class="inline-block bg-pink-500 text-pink-100 hover:bg-pink-400 hover:text-pink-900 p-3 m-4 rounded-full shadow"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div class="md:hidden">
        <div class="flex justify-end w-screen p-4">
          <Show when={show()}>
            <div class="absolute top-0 right-0 pt-16 bg-gray-200 rounded shadow-xl">
              <ul class="mr-16 m-5">
                <li class="m-5">
                  <Link href="/">Home</Link>
                </li>
                <li class="m-5">
                  <Link href="about">About</Link>
                </li>
                <hr />
                <li class="m-5">
                  <Link
                    href="/login"
                    class="inline-block bg-gray-400 text-gray-800 hover:bg-gray-300 hover:text-gray-600 w-full p-3 rounded-xl shadow"
                  >
                    Login
                  </Link>
                </li>
                <li class="m-5">
                  <Link
                    href="/signup"
                    class="inline-block bg-pink-500 text-pink-100 hover:bg-pink-400 hover:text-pink-900 w-full p-3 rounded-xl shadow"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </Show>
          <img
            src="/menu.svg"
            alt="Menu"
            class="absolute cursor-pointer"
            onClick={() => setSHow((s) => !s)}
          />
        </div>
      </div>
    </nav>
  );
}
