import { html } from "hono/html";
import moment from 'moment';

export default function dashboardPage(monitors:any) {
  const cardBorder = (s:string):string =>{
    if(s=="OFFLINE"){
      return "border-red-500 border-2"
    }
    return "";
  }
  const statusColor= (s:string):string =>{
    if(s=="ONLINE" || s=="HEALTHY"){
      return "green"
    }
    else if(s=="EXPIRED"){
      return "yellow"
    }
    return "red"
  }
 
  return html`
    <div
      class="container mx-auto h-full flex flex-col overflow-y-scroll overflow-x-hidden"
      id="dashboardApp"
    >
    <div class="header w-full mb-7 border-b-2 flex justify-between p-4 items-center">
      <h1 class="text-4xl font-bold">Monitors</h1>
      <div class="flex gap-x-4 items-center">
        <button class="py-2 px-4 rounded border text-gray-600 border-gray-400">
          Feature request
        </button>
        <button class="border rounded-md bg-indigo-950 text-white py-2 px-5 flex justify-between gap-4" id="openModal">
          <div class="icon">
            <span data-feather="plus-square"></span>
          </div> Add monitor
        </button>
      </div>
    </div>
    <!-- header -->
    <div class="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-6 gap-4 font-an">
            <div class="rounded flex border border-1 items-center p-4 bg-white">
              <div class="mr-3 ">
              <i data-feather="globe" class="text-gray-100" width="50" height="50"></i>
              </div>
           
              <div class="flex flex-col justify-center items-center ">
                <span class="text-2xl font-bold">${monitors.length}</span>
                <span class="text-sm font-bold text-gray-400">Monitors</span>
              </div>
            </div>
            <div class="rounded flex border border-1 items-center p-4 bg-white">
              <div class="mr-3">
              <i data-feather="smile" class="text-green-100" width="50" height="50"></i>
              </div>
           
              <div class="flex flex-col justify-center items-center">
                <span class="text-2xl font-bold text-green-500">${monitors.reduce((acc:number,monitor:any)=>(monitor.status =="ONLINE"?acc+1:acc),0)}</span>
                <span class="text-sm font-bold text-gray-400">Online</span>
              </div>
            </div>
            <div class="rounded flex border border-1 items-center p-4 bg-white">
              <div class="mr-3">
              <i data-feather="frown" class="text-red-100" width="50" height="50"></i>
              </div>
           
              <div class="flex flex-col justify-center items-center">
                <span class="text-2xl font-bold text-red-500">${monitors.reduce((acc:number,monitor:any)=>(monitor.status =="OFFLINE"?acc+1:acc),0)}</span>
                <span class="text-sm font-bold text-gray-400">Offline</span>
              </div>
            </div>
            <div class="rounded flex border border-1 items-center p-4 bg-white">
              <div class="mr-3">
              <i data-feather="shield" class="text-green-100" width="50" height="50"></i>
              </div>
           
              <div class="flex flex-col justify-center items-center">
                <span class="text-2xl font-bold">${monitors.reduce((acc:number,monitor:any)=>(monitor?.sslStatus =="HEALTHY"?acc+1:acc),0)}</span>
                <span class="text-sm font-bold text-gray-400">Valid SSL</span>
              </div>
            </div>
            <div class="rounded flex border border-1 items-center p-4 bg-white">
              <div class="mr-3">
              <i data-feather="shield-off" class="text-yellow-100" width="50" height="50"></i>
              </div>
           
              <div class="flex flex-col justify-center items-center">
                <span class="text-2xl font-bold text-yellow-500">${monitors.reduce((acc=0,monitor:any)=>(monitor?.ssl?.status=="EXPIRED"?acc+1:acc),0)}</span>
                <span class="text-sm font-bold text-gray-400">Expired SSL</span>
              </div>
            </div>
        </div>


    <div class="conainer p-4 mx-auto w-full">
    <div class="grid md:grid-cols-3 gap-2 sm:grid-cols-2">
    ${monitors.map( (monitor:any )=> html`
      <div class='${(monitor.status =="OFFLINE" ? "bg-red-100  ":"bg-white") + " rounded p-6 w-full font-an shadow border grid grid-auto-flow" + cardBorder(monitor.status) }'>
        <p class="text-xs text-slate-400 text-center">last checked ${ moment(monitor.updatedAt).fromNow()}</p>
        <div class="flex items-center jutify-between gap-2 mt-2 text-slate-600">
          <div class="icon">
            <i data-feather="globe"></i>
          </div>
          <div class="flex items-center justify-between w-full flex-wrap ">
            <h1 class="text-lg font-bold text-blue-600 "><a href='${monitor.ssl.status =="HEALTHY"?"https://":"http://"}${monitor.url}' target="_blank">${monitor.url}</a></h1>
            <div class="flex gap-2 items-center border border-2 border-${statusColor(monitor.status)}-400 rounded-2xl px-1">
              <div class="dot bg-${statusColor(monitor.status)}-500 after:bg-${statusColor(monitor.status)}-500"></div>
              <span class="text-sm font-bold font-an">${monitor.status}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center jutify-between gap-2 text-sm mt-2 text-slate-600 font-light">
          <div class="icon text-${statusColor(monitor?.ssl?.status)}-500">
            <i data-feather='${monitor?.ssl?.status == "HEALTHY"?"shield":"shield-off"}' width="16"></i>
          </div>
          <div class="flex items-center justify-between w-full">
            <h1 class="text-md bg-${statusColor(monitor?.ssl?.status)}-100  text-${statusColor(monitor?.ssl?.status)}-600 border border-1 border-${statusColor(monitor?.ssl?.status)}-500 rounded rounded-full px-2">SSL ${monitor?.ssl?.status}</h1>
          </div>
        </div>

        <div class="flex items-center jutify-between gap-2 text-sm mt-2 text-slate-600 font-light">
          <div class="icon" >
            <i data-feather="clock" width="16"></i>
          </div>
          <div class="flex items-center justify-between w-full">
            <h1 class="text-md">Response time: <span class="font-semibold"> ${monitor.speed} </span></h1>
          </div>
        </div>

        <div class="flex w-full mt-5 items-center justify-between gap-4 ">
          <a href='/dashboard/monitor/${monitor.id}' class="rounded-full text-gray-300 border border-2 border-gray-300 px-3 py-1 w-full text-center font-bold hover:bg-indigo-600 hover:text-white cursor-pointer hover:border-indigo-600 flex items-center text-center justify-center">
            Overview
          </a>
          <div class="icon cursor-pointer hover:text-indigo-700">
            <i data-feather="refresh-ccw"></i>
          </div>
        </div>

      </div>  `)}
    </div>
    </div>

</div>
  <!-- Modal Container -->
  <div id="urlModal" class="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-90 flex items-center justify-center hidden mx-auto">
    <!-- Modal Content -->
    <div class="bg-white py-4 rounded shadow-md" id="addMonitor">
      <!-- Close Button -->
      <button id="closeModal" class="absolute top-0 right-0 mt-4 mr-4 text-gray-100 hover:text-red-500 cursor-pointer">
        &times;
      </button>
      <!-- Modal Title -->
      <div class="px-8 border-b mb-4">
        <h2 class="text-lg font-bold text-slate-400 text-center mb-3">Add new monitor</h2>
      </div>
      <div class="px-8 mt-3">
      <form @submit.prevent="submitForm">
      <input
            type="url"
            v-model="url"
            name="url"
            placeholder="https://example.com"
            class="w-full border p-2 mb-5 mt-3 rounded " required
          />
      <button  type="submit" id="submitUrl" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full">
        Submit
      </button>
      </form>
      </div>
    </div>
  </div>
${html`<script type="module">

    // JavaScript to handle modal functionality
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const urlModal = document.getElementById('urlModal');

    openModalBtn.addEventListener('click', () => {
      urlModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
      urlModal.classList.add('hidden');
    });

    // Close modal if clicking outside of it
    window.addEventListener('click', (event) => {
      if (event.target === urlModal) {
        urlModal.classList.add('hidden');
      }
    });
    import {request} from '../static/api.js'
  const { createApp, ref } = Vue
      createApp({
        setup() {
            const url = ref('');
            async function submitForm (){
              const data = {url:url.value}
                const json = await request('/dashboard/add-monitor',{
                  data,
                  method: 'POST', 
                });
                if(json){
                  window.location.reload();
                  toast.success('New monitor added successfully');

                }
            }
          return {
            url,
            submitForm
          }
        }
      }).mount('#addMonitor')
</script>`}
  `;
}



