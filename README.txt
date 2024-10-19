This is a simple todo list app built using a React frontend and Postgres backend with a Deno 2 runtime
I am using a dockerized Deno ubuntu runtime and a dockerized postgres ubuntu environment 

Deno Fresh is being used to manage:
- SPA & Routing
- SSR / Island Architecture
- HTTP Req/Res
- Testing

Tailwind is used for opinionated CSS-in-JS styling

Redux will be added when necessary for data caching

Development server can be started from frontend/ using 
''' deno task start

project-root/
├── frontend/
│   ├── components/
│   │   └── feature/
│   ├── islands/
│   │   └── feature/
│   ├── routes/
│   │   ├── api/ 
│   │   ├── login/
│   │   └── index.tsx
│   ├── static/
│   ├── deno.json
│   ├── fresh.config.ts
│   ├── deno.json - Manages all Deno packages
│   ├── dev.ts - Development entry point
│   ├── main.ts - Production entry point
│   └── tailwind.config.ts
├── backend/
│   ├── sqlScripts/
│   └── Dockerfile
└── README.txt