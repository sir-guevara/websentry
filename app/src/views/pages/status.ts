import { html } from "hono/html";

const StatusPage = ()=> html`
    <div class="container p-10 flex flex-col justify-center h-full">
        <h1 class="text-3xl text-center">Status Page</h1>
    </div>
`;

export default StatusPage;