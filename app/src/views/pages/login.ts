import { html } from "hono/html";

const LoginPage =() =>html`
<section class="container mx-auto flex flex-col justify-center align-center" id="login">
    <nav class="flex mx-4 text-left items-center justify-between relative p-4">
        <a href="/" class="flex gap-2 text-purple-600">
        <div><- To <span class="font-bold">Home Page</span></div>
        </a>
    </nav>
    <h1 class="text-center text-3xl font-bold my-5">Login</h1>
    <form class="w-full max-w-md mx-auto rounded shadow-md p-10 bg-white" method="post" action='/login' @submit.prevent="submitForm">
        <div class="mb-6">
            <label class="block text-gray-700 text-xs font-bold mb-2" for="email">
                EMAIL
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Enter your email address" required v-model="email">
        </div>
        <div class="mb-6">
            <div class="flex items-center w-full block text-gray-700 text-xs font-bold mb-2">
              <label for="password">PASSWORD</label>
              <a class="ml-auto inline-block  underline" href="#">
                Forgot your password?
              </a>
            </div>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Enter your password" required v-model="password">
        </div>
        <div class="flex gap-6 justify-between">
        <button v-if="!isLoading" type="submit" class="py-2 px-6 border rounded bg-purple-800 hover:bg-purple-500 text-white font-an w-full">Login</button>
        <button v-if="isLoading" type="submit" class="py-2 px-6 border rounded bg-purple-300 hover:bg-purple-500 text-white font-an w-full cursor-not-allowed" disabled> <span class="animate-pulse">loading ...</span></button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a class="underline" href="/signup">
            Sign up
          </a>
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
                const json = await request('/login',{
                  data,
                  method: 'POST', 
                });
                if(json){
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
      }).mount('#login')
      </script>
`



export default LoginPage;