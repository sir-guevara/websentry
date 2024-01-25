import { html } from "hono/html";

const SignupPage =() =>html`
<section class="container mx-auto flex flex-col justify-center align-center">
    <nav class="flex mx-4 text-left items-center justify-between relative p-4">
        <a href="/" class="flex gap-2 text-purple-600">
        <div><- To <span class="font-bold">Home Page</span></div>
        </a>
    </nav>
    <h1 class="text-center text-3xl font-bold my-6">Sign up to <span class="">web<span class="bg-clip-text bg-gradient-to-r from-green-400 to-purple-700">Sentry</span></span></h1>
    <form class="w-full max-w-md mx-auto rounded shadow-md p-10 bg-white" method="post" action='/singup'>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                EMAIL
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="email" placeholder="Enter your email address">
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                PASSWORD
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password">
        </div>
        <div class="flex gap-6 justify-between">
        <button type="submit" class="py-2 px-6 border rounded bg-purple-800 hover:bg-purple-500 text-white font-an w-full"> Login</button>
        </div>
    </form>
</section>
`



export default SignupPage;