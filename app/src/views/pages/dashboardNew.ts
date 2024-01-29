import { html } from "hono/html";

export default function dashboardNewPage() {
  return html`
    <div
      class="container mx-auto p-4 text-center h-full flex flex-col justify-center"
      id="dashboardApp"
    >
      <h1 class="text-5xl my-3">🥳</h1>
      <h2 class="text-4xl font-bold mb-2">Welcome to WebSentry</h2>
      <p>Which site would you like to monitor first?</p>
      <form @submit.prevent="submitForm">
        <div
          class="flex items-center border border-gray-300 rounded-md w-full md:w-1/3 mx-auto mt-6"
        >
          <input
            type="url"
            v-model="url"
            name="url"
            placeholder="https://example.com"
            class="flex-grow px-3 py-2 focus:outline-none rounded-md" required
          />
        </div>
        <button 
          class="mx-auto my-6 px-3  text-center py-2 bg-indigo-600 rounded-md font-semi text-white text-lg w-1/6"
        >
          Go!
        </button>
      </form>
    </div>
    <script type="module">
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
      }).mount('#dashboardApp')
    </script>
  `;
}
