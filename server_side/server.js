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
        res.end(fs.readFileSync("../client_server/js/sarath.js"))
    }
    else if (newUrl.pathname=="/pages/dono.html") {
        res.writeHead(200, { "Content-type": "text/html"});
        res.end(fs.readFileSync("../client_server/pages/dono.html"))
    }
    else if (newUrl.pathname=="/css/style.css") {
        res.writeHead(200, { "Content-type": "text/css"});
        res.end(fs.readFileSync("../client_server/css/style.css"))
    }
    else if (newUrl.pathname=="/css/donor.css") {
        res.writeHead(200, { "Content-type": "text/css"});
        res.end(fs.readFileSync("../client_server/css/donor.css"))
    }
    if(req.method == "post" && path.pathname =="/submit"){
        let body=""
    req.on("data",(fake)=>{
        console.log(fake);
        body +=fake.toString();
        console.log(body);
        
                
    })
}
  






});
app.listen(3001);