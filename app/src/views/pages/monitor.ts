import { html } from "hono/html";
import moment from 'moment';
const statusColor= (s:string):string =>{
    if(s=="ONLINE" || s=="HEALTHY"){
      return "green"
    }
    else if(s=="EXPIRED"){
      return "yellow"
    }
    return "red"
  }
const MonitorPage = (monitor:any)=> html`
    <div class="container p-10 h-full">
        <div class="flex">
            <a href="/dashboard" class="text-md"> < Monitors</a>
        </div>
        <div class="flex items-center">
            <span data-feather="globe" class="mt-5"></span>
            <h2 class="mx-2 text-md mt-5">${monitor?.name && monitor?.name + " - "} ${monitor?.url}</h2>
            <div class="mt-5 py-1 px-3 mx-3 text-sm font-bold text-${statusColor(monitor.status)}-600 border rounded bg-${statusColor(monitor.status)}-200"> ${monitor.status}</div>
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
        <div class="grid grid-cols-2 gap-4 my-6">
       
        <div class="p-2 bg-white rounded p-5 mt-5">
            <h2 class="text-lg mb-5 font-black">SSL Details</h2>
           <ul>
            <li class="flex justify-between items-center w-full p-3">
                <span class="text-sm">SSL Status</span>
                <span class="text-sm font-bold">${monitor?.ssl?.status}</span>
            </li>
            <li class="flex justify-between items-center w-full p-3">
                <span class="text-sm">SSL Expires</span>
                <span class="text-sm font-bold">${ moment(monitor.ssl.validTo).fromNow() + " - "+ new Date(monitor.ssl.validTo).toLocaleDateString()}</span>
            </li>
            <li class="flex justify-between items-center w-full p-3">
                <span class="text-sm">SSL Issuer</span>
                <span class="text-sm font-bold">${monitor?.ssl?.issuer}</span>
            </li>
            <li class="flex justify-between items-center w-full p-3">
                <span class="text-sm">organization</span>
                <span class="text-sm font-bold">${monitor?.ssl?.organization}</span>
            </li>
            <li class="flex justify-between items-center w-full p-3">
                <span class="text-sm">country</span>
                <span class="text-sm font-bold">${monitor?.ssl?.country}</span>
            </li>
           </ul>
        </div>
         <div class="p-2 bg-white rounded p-5 mt-5">
            <h2 class="text-md font-black">Alert Settings</h2>
            <div class="p-1">
                <form action="">
                    <div class="for-group">
                        <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
                        <div class="mt-1">
                            <input type="email" name="email" id="email" autocomplete="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
`;

export default MonitorPage;