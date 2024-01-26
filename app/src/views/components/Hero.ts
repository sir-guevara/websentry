import { html } from "hono/html";

const Hero = () => html`<section class="container mx-auto px-4">
  <nav class="flex -mx-4 items-center justify-between relative p-4">
    <div class="logo px-4 w-60 max-w-full">
      <a href="/">WebSentry.</a>
    </div>
    <ul class="flex">
      <li>
        <a
          class="inline-flex items-center justify-center w-full px-6 mx-3 py-2 mb-2 text-lg  sm:w-auto sm:mb-0"
          href="/#pricing"
          >Pricing</a
        >
      </li>
      <li>
        <a
          class="inline-flex items-center justify-center w-full px-6 mx-3 py-2 mb-2 text-lg border-purple-600 border rounded text-purple-600 sm:w-auto sm:mb-0"
          href="login"
          >Log in</a
        >
      </li>
      <li>
        <a
          class="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg bg-purple-600 border rounded text-white sm:w-auto sm:mb-0"
          href="/signup"
          >Sign up</a
        >
      </li>
    </ul>
  </nav>
  <div
    class="px-12 mx-auto max-w-7xl pt-12 flex justify-center align-center gap-10 mt-7"
  >
    <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 ">
      <h1
        class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
      >
        <span>Get</span>
        <span
          class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-700 lg:inline"
          >real-time notifications</span
        >
        <span>when your site is down</span>
      </h1>
      <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl">
        We monitor your site and certificate, sending notifications via
        <img
          src="https://web.archive.org/web/20201018084916im_/https://pingr.io/img/email.2d7528af.svg"
          alt=""
          width="20"
          class="inline"
        />
        <span class="font-an">Email</span>, or
        <img
          src="https://web.archive.org/web/20201005062102im_/https://pingr.io/img/sms.df285b58.svg"
          alt=""
          width="20"
          class="inline"
        /><span class="font-an">SMS</span>.
      </p>
      <div class="my-4 space-x-0 md:space-x-2 md:my-8">
        <a
          href="/signup"
          class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-purple-600 rounded-md sm:w-auto sm:mb-0"
        > Try for free
        </a>
      </div>
    </div>
    <div class="w-full mx-auto text-center md:w-10/12">
      <div class="relative z-0 w-full">
        <div class="relative overflow-hidden shadow-2xl">
          <div
            class="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl"
          >
            <div class="flex space-x-1.5">
              <div class="w-3 h-3 border-2 border-white rounded-full"></div>
              <div class="w-3 h-3 border-2 border-white rounded-full"></div>
              <div class="w-3 h-3 border-2 border-white rounded-full"></div>
            </div>
          </div>
          <img
            src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
            class="rounded-b"
          />
        </div>
      </div>
    </div>
  </div>
</section>`;

export default Hero;
