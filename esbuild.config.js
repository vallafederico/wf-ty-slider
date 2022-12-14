import { serve, build } from "esbuild";

/* - Setup */
const env = process.env.NODE_ENV;
const production = env === "production";

const FILES = {
  entry: ["src/app.js"],
  out: "build",
};

const SETTINGS = {
  bundle: true,
  sourcemap: !production,
  loader: {
    ".png": "dataurl",
    ".webp": "dataurl",
  },
};

/* -- Plugins */
const PLUGINS = [];

/* --- DEVELOPMENT */
function serveDev() {
  serve(
    {
      port: 8000,
      servedir: "dist",
    },
    {
      entryPoints: FILES.entry,
      outdir: "dist",
      ...SETTINGS,
      plugins: PLUGINS,
    }
  ).then((server) => {
    console.log(`↑DEV ↑`);
    //   server.stop();
  });
}

/* --- DEVELOPMENT */
function serveFile() {
  serve(
    {
      port: 8000,
    },
    {
      entryPoints: FILES.entry,
      outfile: "dev.js",
      ...SETTINGS,
      plugins: PLUGINS,
    }
  ).then((server) => {
    console.log("→ → → ", "https://webflow.com/design/wf-sliderii");
    console.log("( ", "http://localhost:8000/dev.js", " )");
    //   server.stop();
  });
}

/* --- BUILD */
function buildJs() {
  build({
    entryPoints: FILES.entry,
    outdir: FILES.out,
    ...SETTINGS,
    plugins: PLUGINS,
  }).then((stats) => {
    console.log(stats);
  });
}

/* ------ Run! */
if (production) {
  buildJs();
} else if (env === "flow") {
  serveFile();
} else {
  serveDev();
}
