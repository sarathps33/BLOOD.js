const http=require("http")
const fs= require("fs")
const url=require("url")
const app=http.createServer((req,res)=>{
    const newUrl = url.parse(req.url)
    console.log(newUrl);
    if (newUrl.pathname=="/") {
        res.writeHead(200, { "Content-type": "text/html"});
        res.end(fs.readFileSync("../client_server/index.html"))
    }
    else if (newUrl.pathname=="/js/sarath.js") {
        res.writeHead(200, { "Content-type": "text/js"});
        res.end(fs.readFileSync("/js/sarath.js"))
    }
    else if (newUrl.pathname=="/add") {
        res.writeHead(200, { "Content-type": "text/html"});
        res.end(fs.readFileSync("/pages/dono.htm"))
    }



});
app.listen(3001);