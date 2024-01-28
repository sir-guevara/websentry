import { html } from "hono/html";

export default function dashboardPage(){
    return html` 
    <div class="container mx-auto p-4 text-center h-full flex flex-col justify-center" id="dashboardApp">
                <h1 class="text-5xl my-3">🥳</h1>
        <h2 class="text-4xl font-bold mb-2">Welcome to WebSentry</h2>
        <p>Which site would you like to monitor first?</p>
        <form method="post">
        <div class="flex items-center border border-gray-300 rounded-md w-full md:w-1/3 mx-auto mt-6">
            <input
                type="url"
                v-model="url"
                name="url"
                @keyUp='checkUrl'
                placeholder="https://example.com"
                class="flex-grow px-3 py-2 focus:outline-none rounded-md" />
</div>
        <button class="mx-auto my-6 px-3  text-center py-2 bg-indigo-600 rounded-md font-semi text-white text-lg w-1/5">Go! {{message}}</button></form>
    </div>
    <script>
  const { createApp, ref } = Vue
  createApp({
    setup() {
      const message = ref('Hello vue!');
      const url = ref('');
      const isUrl = ref(false);
      function checkUrl (){
      pattern =  new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); 
      isUrl.value = pattern.test(url.value);
      console.log(isUrl.value);
    }
      return {
        message,
        url,
        isUrl,checkUrl
      }
    }
  }).mount('#dashboardApp')
</script>
    `
}