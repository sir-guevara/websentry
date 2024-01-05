import { raw } from "hono/html";
import type { FC } from 'hono/jsx';
const isProd = process.env.NODE_ENV === "production";

const manifestPath = "../dist/manifest.json";
const cssFile = isProd
  ? (await import(manifestPath)).default["src/client.tsx"]?.css?.at(0)
  : null;
const Layout: FC = (props) => (
    <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/feather-icons"></script>
            {cssFile ? raw(`<link rel="stylesheet" href="${cssFile}">`) : null}
            <title>WebSentry</title>
        </head>
        <body class="font-sans">
            {props.children}
            <footer>
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear() }. All rights reserved.</p>
                </div>
            </footer>
            <script>
                feather.replace();
            </script>
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
)

export default Layout;