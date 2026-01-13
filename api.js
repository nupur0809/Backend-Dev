 const http=require("http")
 const server=http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.method)
    res.writeHead(200,{"content-type":"plain/html"})
    res.write("<h1>welcome</h1>")
    res.end()
 }) 