import React from "react";
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-orange-500">Hono</h1>
        <p className="mt-4 text-4xl leading-tight font-extrabold">
          Fast, Lightweight, Web-standards
        </p>
        <p className="mt-4 text-xl">Runs on any JavaScript runtime.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
            View Docs
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white">
            View on GitHub
          </button>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
          data-v0-t="card"
        >
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt=""
              className="h-16 w-16"
              width="64"
              height="64"
              style="aspect-ratio: 64 / 64; object-fit: cover"
            />
            <h3 className="mt-4 text-lg font-medium">
              Ultrafast &amp; Lightweight
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              The router RegExpRouter is really fast. The hono/tiny preset is
              under 14kB. Using only Web Standard APIs.
            </p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
          data-v0-t="card"
        >
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt=""
              className="h-16 w-16"
              width="64"
              height="64"
              style="aspect-ratio: 64 / 64; object-fit: cover"
            />
            <h3 className="mt-4 text-lg font-medium">Multi-runtime</h3>
            <p className="mt-2 text-sm text-gray-600">
              Works on Cloudflare, Fastly, Deno, Bun, Lagon, AWS, or Node.js.
              The same code runs on all platforms.
            </p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
          data-v0-t="card"
        >
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt=""
              className="h-16 w-16"
              width="64"
              height="64"
              style="aspect-ratio: 64 / 64; object-fit: cover"
            />
            <h3 className="mt-4 text-lg font-medium">Batteries Included</h3>
            <p className="mt-2 text-sm text-gray-600">
              Hono has built-in middleware, custom middleware, third-party
              middleware, and helpers. Batteries included.
            </p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
          data-v0-t="card"
        >
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt=""
              className="h-16 w-16"
              width="64"
              height="64"
              style="aspect-ratio: 64 / 64; object-fit: cover"
            />
            <h3 className="mt-4 text-lg font-medium">Delightful DX</h3>
            <p className="mt-2 text-sm text-gray-600">
              Super clean APIs. First-className TypeScript support. Now, we've
              got "Types".
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-red-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-yellow-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <div className="text-white text-sm">
            <p>import from 'hono'</p>
            <p>const app = new Hono()</p>
            <p>app.get('/', (c) =&gt; c.text('Hello Hono!'))</p>
            <p>export default app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
