import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";


interface SiteData {
    title?: string
    description?: string
    image?: string
    content: HtmlEscapedString | Promise<HtmlEscapedString >
  }
  const Layout = (props: SiteData) => html`
  <html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
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
      a,.font-an{
        font-family: 'Anonymous Pro', monospace;
      }

      h4,p{
        font-style: normal;
        line-height: 28px;
      }
    </style>
    <link href="/public/dist/toasty.min.css" rel="stylesheet">
    <script src="/public/dist/toasty.min.js"></script>
  </head>
  <body>
    <div class="bg-slate-100 min-h-full">
    ${props.content}
    </div>
    <script>
      const toast = new Toasty();
      toast.info("Here is some information!");
    </script>
  </body>
  </html>
  `
  export default Layout;