const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const OUT_DIR = path.join(__dirname, "..", "out");

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  let filePath = req.url === "/" ? "/index.html" : req.url;
  const resolved = path.resolve(OUT_DIR, path.normalize(filePath).replace(/^\/+/, ""));
  if (!resolved.startsWith(OUT_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  const ext = path.extname(resolved);
  const mime = MIME[ext] || "application/octet-stream";

  fs.readFile(resolved, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(500);
      res.end("Server error");
      return;
    }
    res.writeHead(200, { "Content-Type": mime });
    res.end(data);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("");
  console.log("  Q-Card önizleme:");
  console.log("  http://127.0.0.1:" + PORT);
  console.log("");
  console.log("  Durdurmak için: Ctrl+C");
  console.log("");
});
