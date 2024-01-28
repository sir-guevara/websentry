import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";
import SideNav from "./components/Sidenav";


interface SiteData {
    title?: string
    description?: string
    image?: string
    content: HtmlEscapedString | Promise<HtmlEscapedString >
  }
  const DashboardLayout = (props: SiteData) => html`
  <html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
    <title>${props.title|| "WebSentry - uptime monitoring"}</title>
    <meta name="description" content="${props.description}">
    <meta property="og:title" content="${props.title}">
    <meta property="og:image" content="${props.image}">
    <style>
      body {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 18px;
        font-weight:400;
      }
      *{
        transition: all 1s ease-out;

      }
.t-wrap {
  top:10px!important;
  bottom:90vh!important; 
}
      a,.font-an{
        font-family: 'Anonymous Pro', monospace;
      }

      h4,p{
        font-style: normal;
        line-height: 28px;
      }
    </style>
    <script src="http://catdad.github.io/tiny.cdn/lib/toast/1.0.0/toast.min.js"></script>
  </head>
  <body class="text-slate-600">
    <div class="bg-slate-100 flex h-full">
    <div class="w-1/5 hidden md:block">
    ${SideNav()}
    </div>
        <div class="md:w-5/6 w-full">
            ${props.content}
        </div>
    </div>
    <!-- <script>
        toast.error('🤦‍♂️ error message :(', 5000);
        toast.success('👍 success message', 5000);
    </script> -->
  </body>
  </html>
  `
  export default DashboardLayout;