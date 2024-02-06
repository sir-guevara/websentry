import { html } from "hono/html";

const MonitorPage = (monitor:any)=> html`
    <div class="container p-10 h-full">
        <div class="flex">
            <a href="/dashboard text-2xl"> < Monitors</a>
        </div>
        <div class="flex items-center">
            <span data-feather="globe"></span>
            <h2 class="mx-2 text-2xl">acmecorp.vercel.app</h2>
            <div class="p-1 mx-3 text-sm font-bold text-green-600 border rounded bg-green-200"> ONLINE</div>
        </div>
        <br>
        <div class="items-center grid gap-2 grid-cols-3 mt-3">
            <div class="rounded border p-3 px-6 bg-white">
                <h1 class="text-sm">Response time</h1>
                <p class="text-2xl">0.5s</p>
            </div>
            <div class="rounded border p-2 px-6 bg-white">
                <h1 class="text-sm">Last Checked</h1>
                <p class="text-2xl">30 seconds ago</p>
            </div>
            <div class="rounded border p-2 px-6 bg-white">
                <h1 class="text-sm">Checked Every</h1>
                <p class="text-2xl">5 mins </p>
            </div>
        </div>

        <div class="p-2 my-5">
            <h2 class="text-2xl">Domain Details</h2>
        </div>
        <div class="p-2">
            <h2 class="text-2xl">SSL Details</h2>
        </div>
    </div>
`;

export default MonitorPage;