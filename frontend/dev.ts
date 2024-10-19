#!/usr/bin/env -S deno run -A --watch=static/,routes/

// This is the development environment entry point for the app

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

await dev(import.meta.url, "./main.ts", config);
