import { html } from "hono/html";

const SignupPage =() =>html`
<section class="container mx-auto flex flex-col justify-center align-center" id="signup">
    <nav class="flex mx-4 text-left items-center justify-between relative p-4">
        <a href="/" class="flex gap-2 text-purple-600">
        <div><- To <span class="font-bold">Home Page</span></div>
        </a>
    </nav>
    <h1 class="text-center text-3xl font-bold my-6">Sign up to <span class="">web<span class="bg-clip-text bg-gradient-to-r from-green-400 to-purple-700">Sentry</span></span></h1>
    <form class="w-full max-w-md mx-auto rounded shadow-md p-10 bg-white" method="post" action='/signup' @submit.prevent="submitForm">
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                EMAIL
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Enter your email address" required v-model="password">
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                PASSWORD
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" required v-model="password">
        </div>
        <div class="flex gap-6 justify-between">
        <button type="submit" class="py-2 px-6 border rounded bg-purple-800 hover:bg-purple-500 text-white font-an w-full" :class="{isLoading:'animate-pulse'}" :disabled="isLoading"> {{ isLoading ? "loading ...":"sign up"}}</button>
        </div>
    </form>
</section>
<script type="module">
import {request} from '../static/api.js'
  const { createApp, ref } = Vue
      createApp({
        setup() {
            const email = ref('');
            const password = ref('');
            const isLoading = ref(false);
            async function submitForm (){
                isLoading.value= true;
              const data = {email:email.value, password:password.value}
                const json = await request('/signup',{
                  data,
                  method: 'POST', 
                });
                if(json){
                  toast.success('New monitor added successfully');
                  isLoading.value= false;
                  window.location = "/dashboard"
                }
                isLoading.value= false;
            }
          return {
            email,password,
            isLoading,
            submitForm
          }
        }
      }).mount('#signup')
</script>
`



export default SignupPage;