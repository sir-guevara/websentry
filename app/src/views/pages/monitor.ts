import { html } from "hono/html";
import moment from 'moment';
const MonitorPage = (monitor:any)=> html`
    <div class="container p-10 h-full">
        <div class="flex">
            <a href="/dashboard" class="text-md"> < Monitors</a>
        </div>
        <div class="flex items-center">
            <span data-feather="globe" class="mt-5"></span>
            <h2 class="mx-2 text-md mt-5">${monitor?.name && monitor?.name + " - "} ${monitor?.url}</h2>
            <div class="mt-5 p-1 mx-3 text-sm font-bold text-green-600 border rounded bg-green-200"> ONLINE</div>
        </div>
        <br>
        <div class="items-center grid gap-2 grid-cols-3 mt-3">
            <div class="rounded-md border p-3 px-6 bg-white">
                <h1 class="text-sm">Response time</h1>
                <p class="text-md">${monitor?.speed}</p>
            </div>
            <div class="rounded-md border p-3 px-6 bg-white">
                <h1 class="text-sm">Last Checked</h1>
                <p class="text-md">${ moment(monitor.updatedAt).fromNow()}</p>
            </div>
            <div class="rounded-md border p-3 px-6 bg-white">
                <h1 class="text-sm">Checked Every</h1>
                <p class="text-md">5 mins </p>
            </div>
        </div>

        <div class="p-2 my-5">
            <h2 class="text-md">Domain Details</h2>
        </div>
        <div class="p-2">
            <h2 class="text-md">SSL Details</h2>
           <ul>
            <li>
                <span class="text-sm">SSL Status</span>
                <span class="text-md">${monitor?.ssl?.status}</span>
            </li>
            <li>
                <span class="text-sm">SSL Expires</span>
                <span class="text-md">${ moment(monitor.ssl.validTo).fromNow() + " - "+ new Date(monitor.ssl.validTo).toLocaleDateString()}</span>
            </li>
            <li>
                <span class="text-sm">SSL Issuer</span>
                <span class="text-md">${monitor?.ssl?.issuer}</span>
            </li>
            <li>
                <span class="text-sm">organization</span>
                <span class="text-md">${monitor?.ssl?.organization}</span>
            </li>
            <li>
                <span class="text-sm">country</span>
                <span class="text-md">${monitor?.ssl?.country}</span>
            </li>
           </ul>
        </div>
    </div>
`;

export default MonitorPage;