import { raw } from "hono/html";
const isProd = process.env.NODE_ENV === "production";

const manifestPath = "../dist/manifest.json";
const cssFile = isProd
  ? (await import(manifestPath)).default["src/client.tsx"]?.css?.at(0)
  : null;
const Layout = (props: { children?: any; title: string }) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <script src="https://unpkg.com/feather-icons"></script>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"
      ></script>
      {cssFile ? raw(`<link rel="stylesheet" href="${cssFile}">`) : null}
      <title>{props.title}</title>
    </head>
    <body class="font-sans">
      {props.children}
      <footer>
        <div class="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
      <script>feather.replace();</script>
      <script src="/static/js/op.js/"></script>

      {isProd
        ? null
        : raw(`<script
                type="module"
                src="http://localhost:5173/@vite/client"
            ></script>
          
            <script
                type="module"
                src="http://localhost:5173/src/client.tsx"
            ></script>`)}
    </body>
  </html>
);

export default Layout;
