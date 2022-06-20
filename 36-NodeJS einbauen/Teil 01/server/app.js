"use strict"

const http = require("http")
const urlParse = require("url-parse")

const servePublic = require("./public")

const app = http.createServer((req, res) => {
  const parsedUrl = urlParse(req.url)

  if (parsedUrl.pathname.substr(0, 8) === "/public/") {
    return servePublic(parsedUrl, res)
  }

})

app.listen(8081)