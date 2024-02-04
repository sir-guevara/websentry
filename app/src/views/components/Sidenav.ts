import { html } from "hono/html";
import { HtmlEscapedString } from 'hono/utils/html';


const links = [
    {name:"Monitors",url:"/dashboard"},
    {name:"Status page",url:"/dashboard/status-page"},
    {name:"Subscription",url:"/dashboard/subscription"},
    {name:"Team",url:"/dashboard/team"}
];

const SideNav = () => html`
    <div class="sidebar bg-slate-950 h-full px-7 flex flex-col gap-y-8 p-3 align-center text-white text-md">
        <div class="my-3">
            <h3 class="sidebar-title font-black font-an text-2xl block">WebSentry.</h3>
        </div>
            <button class="px-5  rounded mb-3 block active:bg-slate-800 py-2 bg-indigo-600 text-white hover:text-white font-bold hover:bg-indigo-800">✨ Upgrade</button>
            <ul class="w-full flex flex-col">
                ${links.map(link => html`
                    <li class="w-full">
                        <a href="${link.url}" class="nav-link block px-5 mb-2 py-2 w-full rounded-md hover:bg-slate-900 active:bg-indigo-600 font-bold">
                        ${link.name}
                    </a>
                    </li>
                `)}
            </ul>
          
        <div class="h-full flex flex-col justify-end">
            <a href="/logout" class="px-5 items-center py-2 rounded-md flex  justify-between  w-full bg-blue-950 hover:bg-indigo-600 border-none mb-3 hover:text-white text-slate-400"><span> Log out </span> <span data-feather="power" width="20"><span></a>
        </div>
                
        ${html`<script>
            const links = document.querySelectorAll('.nav-link');
            for(let i=0; i < links.length; i++ ){
                    links[i].classList.remove('bg-indigo-400');
                if(links[i].getAttribute('href') == location.pathname){
                    links[i].classList.add('bg-indigo-400');
                }
            }
          
        </script>`}
    </div>
`;

export default SideNav;
