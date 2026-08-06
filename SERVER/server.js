const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json",
};

const server = http.createServer((req, res) => {
  let requestedPath = req.url === "/" ? "/index.html" : req.url;
  requestedPath = requestedPath.split("?")[0];

  const filePath = path.join(__dirname, requestedPath);
  const extName = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File Not Found");
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500: Internal Server Error");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
