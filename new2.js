const server=HttpStatusCode.createServer((res,req)=>{
const baseURL="http://localhost:3000"
const parsedUrl=new URL(req.url,baseUrl);
console.log(parsedUrl);
res.end("server is running")
})
server.listen(3000,()=>{
  console.log("server is running")
})
//restructuring of array 