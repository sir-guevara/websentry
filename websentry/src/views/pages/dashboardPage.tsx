import { raw } from "hono/html";
import Layout from "../components/IndexLayout";

const DbPage = () => {
  return (
    <Layout title="WebSentry - Free Site Monitoring">
      {raw(` <header class="bg-white shadow-md">
      <div class="container mx-auto flex items-center justify-between p-4">
        <div class="flex items-center">
          <h1 class="text-lg font-bold text-orange-500 ml-2">WebSentry.</h1>
        </div>
        <nav class="hidden md:flex items-center space-x-4 navbar">
          <a
            href="#"
            class="border-b-2 border-transparent hover:border-blue-500 px-2 py-1 flex items-center"
          >
            <i data-feather="home" class="mr-2"></i> Dashboard
          </a>
          <a
            href="#"
            class="border-b-2 border-transparent hover:border-blue-500 px-2 py-1 flex items-center"
          >
            <i data-feather="settings" class="mr-2"></i> Settings
          </a>
          <a
            href="#"
            class="border-b-2 border-transparent hover:border-blue-500 px-2 py-1 flex items-center"
          >
            <i data-feather="log-out" class="mr-2"></i> Logout
          </a>
        </nav>
        <div class="block md:hidden">
          <button
            @click="openMenu = !openMenu"
            class="text-gray-600 focus:outline-none"
          >
            <i data-feather="menu"></i>
          </button>
        </div>
      </div>
      <div
        x-show="openMenu"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 transform -translate-y-2"
        x-transition:enter-end="opacity-100 transform translate-y-0"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100 transform translate-y-0"
        x-transition:leave-end="opacity-0 transform -translate-y-2"
        class="navbar-menu"
      >
        <a href="#" class="flex items-center">
          <i data-feather="home" class="mr-2"></i> Dashboard
        </a>
        <a href="#" class="flex items-center">
          <i data-feather="settings" class="mr-2"></i> Settings
        </a>
        <a href="#" class="flex items-center">
          <i data-feather="log-out" class="mr-2"></i> Logout
        </a>
      </div>
    </header>

    <div class="container mx-auto p-6">
      <h2 class="text-2xl font-semibold text-gray-800">Dashboard</h2>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div class="p-4 md:p-6 bg-white rounded-md shadow-md flex items-center">
          <i data-feather="globe" class="text-4xl text-blue-500 mr-4"></i>
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Total Sites</h3>
            <p class="mt-2 text-xl font-bold text-blue-500">120</p>
          </div>
        </div>
        <div class="p-4 md:p-6 bg-white rounded-md shadow-md flex items-center">
          <i
            data-feather="arrow-up-circle"
            class="text-4xl text-green-500 mr-4"
          ></i>
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Up Sites</h3>
            <p class="mt-2 text-xl font-bold text-green-500">95</p>
          </div>
        </div>
        <div class="p-4 md:p-6 bg-white rounded-md shadow-md flex items-center">
          <i
            data-feather="arrow-down-circle"
            class="text-4xl text-red-500 mr-4"
          ></i>
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Down Sites</h3>
            <p class="mt-2 text-xl font-bold text-red-500">25</p>
          </div>
        </div>
        <div class="p-4 md:p-6 bg-white rounded-md shadow-md flex items-center">
          <i data-feather="shield" class="text-4xl text-green-500 mr-4"></i>
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Active SSL</h3>
            <p class="mt-2 text-xl font-bold text-green-500">80</p>
          </div>
        </div>
        <div class="p-4 md:p-6 bg-white rounded-md shadow-md flex items-center">
          <i data-feather="alert-circle" class="text-4xl text-red-500 mr-4"></i>
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Expired SSL</h3>
            <p class="mt-2 text-xl font-bold text-red-500">5</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-6 p-4">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2 justify-between">
          <h2 class="text-2xl font-semibold text-gray-800">Monitor</h2>
          <button class="text-slate-500" title="Refresh">
            <i data-feather="refresh-cw"></i>
          </button>
        </div>
        <div class="flex items-center space-x-4" x-data="modalData">
          <button
            @click="toggleModal"
            class="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md w-full"
          >
            Add Site
          </button>
          <div
            x-show="openModal"
            class="fixed inset-0 overflow-y-auto flex items-center justify-center z-15"
          >
            <div
              class="absolute inset-0 bg-gray-500 opacity-75"
              @click="openModal = false"
            ></div>

            <div class="bg-white p-6 rounded-md shadow-md w-96 z-20">
              <button
                @click="openModal = false"
                class="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <h3 class="text-xl font-semibold text-gray-800 mb-4">Add Site</h3>

              <form x-on:submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label
                    for="url"
                    class="block text-sm font-medium text-gray-600"
                    >URL</label
                  >
                  <input
                    x-model="url"
                    type="url"
                    id="url"
                    name="url"
                    required
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="sitename"
                    class="block text-sm font-medium text-gray-600"
                    >Site Name</label
                  >
                  <input
                    x-model="sitename"
                    type="text"
                    id="sitename"
                    name="sitename"
                    required
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  x-bind:class="{ 'cursor-not-allowed': loading }"
                  :disabled="loading"
                >
                  <span x-show="loading">Loading...</span>
                  <span x-show="!loading">Add Site</span>
                </button>
              </form>

              <div x-show="success" class="mt-4 text-green-500">
                Site added successfully!
              </div>

              <div
                x-show="error"
                class="mt-4 text-red-500"
                x-text="error"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-5 gap-2 font-semibold border-b border-gray-300 p-2"
      >
        <div>Name</div>
        <div>Status</div>
        <div>Certificate</div>
        <div>Uptime</div>
        <div>Last Checked</div>
      </div>

      <div
        x-data='{sites:[
                {
                  sitename: "Facebook",
                  certificate: "Healthy",
                  status: "Online",
                  last_check: "2 mins ago",
                  uptime: "100%",
                },
                {
                  sitename: "Amazon",
                  certificate: "Critical",
                  status: "Online",
                  last_check: "2 secs ago",
                  uptime: "100%",
                },
                {
                  sitename: "Twitter",
                  certificate: "Healthy",
                  status: "Offline",
                  last_check: "20 mins ago",
                  uptime: "98%",
                },
              ]}'
      >
        <template x-for="(site, index) in sites" :key="index">
          <div
            @click="openDetails = !openDetails"
            x-data="{ openDetails: false }"
            class="border-t border-gray-300 p-4 cursor-pointer bg-white rounded-md shadow-md m-2"
          >
            <div class="grid grid-cols-5 gap-2 items-center">
              <div class="col-span-1 flex items-center space-x-2">
                <div class="bg-blue-400 w-4 h-4 rounded-full"></div>
                <p class="font-semibold" x-text="site.sitename"></p>
              </div>
              <div class="col-span-1">
                <span
                  x-bind:class="{'bg-green-500 text-white': site.status === 'Online', 'bg-red-500 text-white': site.status === 'Offline'}"
                  class="px-2 py-1 rounded-full"
                >
                  <span x-text="site.status"></span>
                </span>
              </div>
              <div class="col-span-1">
                <span
                  x-bind:class="{'bg-green-500 text-white': site.certificate === 'Healthy', 'bg-red-500 text-white': site.certificate === 'Critical'}"
                  class="px-2 py-1 rounded-full"
                >
                  <span x-text="site.certificate"></span>
                </span>
              </div>
              <div class="col-span-1" x-text="site.uptime"></div>
              <div class="col-span-1" x-text="site.last_check"></div>
            </div>

            <div x-show="openDetails" class="mt-2"></div>
          </div>
        </template>
      </div>
    </div>
   
`)}
    </Layout>
  );
};

export default DbPage;
