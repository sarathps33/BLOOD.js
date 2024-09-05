const http=require("http")
const fs= require("fs")
const url=require("url")
const queryString = require("querystring");
const { MongoClient } = require("mongodb");
const { error,log } = require("console")
const client = new 
MongoClient("mongodb://127.0.0.1:27017/")
const app=http.createServer((req,res)=>{
    const db = client.db("Blood_bank");
  const collection = db.collection("donors");
  const newUrl = url.parse(req.url);
  console.log(req.method);
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
    if(req.method == "post" && path.pathname =="/pages/submit"){
        let body=""
    req.on("data",(fake)=>{
        console.log(fake);
        body +=fake.toString();
        console.log(body);            
    });
   req.on("end",async()=>{
    if(body!=null){
        const formData = queryString.parse(body);
        console.log(formData);
        collection
        .insertOne(formData)
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
            console.log(error);
          });
    }
    res.writeHead(200, { "Content-type": "text/html"});
        res.end(fs.readFileSync("../client_server/index.html"))
   })
}
  
  
   





});
app.listen(3001);