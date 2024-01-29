import { html } from "hono/html";

export default function dashboardPage(monitors:any) {
  return html`
    <div
      class="container mx-auto p-4 text-center h-full flex flex-col justify-center"
      id="dashboardApp"
    >
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
