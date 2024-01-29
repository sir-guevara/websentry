import { html } from "hono/html";

export default function dashboardPage(monitors:any) {
  return html`
    <div
      class="container mx-auto h-full flex flex-col "
      id="dashboardApp"
    >
    <div class="header w-full mb-7 border-b-2 flex justify-between p-4 items-center">
      <h1 class="text-4xl font-bold">Monitors</h1>
      <div class="flex gap-x-4 items-center">
        <button class="border rounded-md py-2 px-6">
          Feature request
        </button>
        <button class="border rounded-md bg-indigo-950 text-white py-2 px-6">
          + Add monitor
        </button>
      </div>
    </div>
    <div class="conainer p-4 mx-auto">
    <div class="p-4 bg-white container mx-auto rounded-md">
      <div class="monitor w-1/3">
        <div class="img-container w-full rounded-t-md rounded-b-sm  shadow border"> 
          <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/780adad3-1287-4a7d-9855-177eda23eaa7.jpeg" alt="">
        </div>
        <div class="footer bg-white mt-2 p-3 flex justify-between items-center rounded-b-md rounded-t-sm shadow border">
        <div class="dot after:bg-green-600 bg-green-600 flex justfy-center items-center"></div>

          <div class="flex gap-x-1 items-center justify-between">
            <button class="border rounded-sm py-1 text-sm px-6">
              Edit
            </button>
            <button class="border rounded-sm text-sm py-1 px-6">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

      <h1 class="text-5xl my-3">Monitors</h1>
      ${monitors.map( (monitor:any )=> html`
      <div class="flex flex-row justify-center">
        <div class="flex flex-col">
          <div class="flex flex-row justify-center">
            <h1 class="text-2xl">${monitor.url}</h1>
          </div>
          <div class="flex flex-row justify-center">
            <h1 class="text-2xl">${monitor.status}</h1>
          </div>
        </div>
      </div>
      </div>
      `)}
    </div>
  
  `;
}
