import Layout from "../components/IndexLayout";
import Modal from "../components/modal";

const IndexPage = () => {
  let isOpen = false;

  const toggleModal = () => {
    isOpen = !isOpen;
  };
  return (
    <Layout title="WebSentry - Free Site Monitoring">
      <div class="container mx-auto relative">
        <nav class="fixed left-4 right-4 md:mx-auto md:right-0 md:left-0 md:w-4/5 lg:w-1/2 p-2 rounded-full mt-2 md:mt-5 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
          <a href="#" class=" md:pt-1 px-3 text-md md:text-lg text-ornage-500">
            Web<span class="font-bold  text-orange-500 ">Sentry</span>
            <span class="text-orange-500 font-bold">.</span>
          </a>
          <ul class="flex space-x-4 ml-auto">
            <li>
              <button
                onClick={toggleModal}
                id="openModalBtn"
                class="text-xs md:text-sm text-white font-bold px-6 py-2 rounded-full bg-orange-600 transition duration-300 ease-in-out hover:text-orange-500 border-orange-500 hover:bg-white flex items-center justify-center gap-2"
              >
                <span>
                  <i
                    data-feather="lock"
                    class="text-xs w-[1rem] md:w-[1.2rem]"
                  ></i>
                </span>
                Access Account
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Modal isOpen={isOpen} />
      <div class="p-1 bg-gradient-to-t from-orange-700 via-orange-500 to-orange-400 min-h-screen flex items-center">
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
