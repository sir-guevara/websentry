import type { FC } from "hono/jsx";
import Layout from "../components/IndexLayout";
const IndexPage: FC = () => {
  return (
    <Layout>
      <div className="container p-4">
        <nav class="bg-stone-900  text-white left-2 right-2 md:left-10 md:right-10 fixed  mt-5 rounded-full flex justify-center align-center mx-4  p-3">
          <a
            href="#"
            class="pt-3 md:pt-1 px-3 text-sm md:text-lg text-ornage-500"
          >
            Web<span class="font-bold text-white">Sentry</span>
            <span class="text-orange-500 font-bold">.</span>
          </a>
          <ul class="flex space-x-4 ml-auto">
            <li>
              <a
                href="#"
                class="text-xs md:text-sm font-bold px-6 py-2 rounded-full bg-orange-600 transition duration-300 ease-in-out hover:text-orange-500 border-orange-500 hover:bg-white flex items-center justify-center gap-3"
              >
                <span>
                  <i data-feather="lock" class="text-xs"></i>
                </span>
                Access Account
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="bg-gradient-to-t from-orange-700 via-orange-500 to-orange-400 min-h-screen flex items-center">
        <div class="container mx-auto text-white text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Your Website
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl mb-6">
            Discover the amazing features of our platform.
          </p>

          <div class="space-x-4">
            <a
              href="#"
              class="bg-white text-blue-500 hover:bg-blue-100 px-6 py-3 rounded-full transition duration-300 ease-in-out"
            >
              Learn More
            </a>
            <a
              href="#"
              class="bg-transparent border border-white text-white hover:bg-white hover:text-blue-500 px-6 py-3 rounded-full transition duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
