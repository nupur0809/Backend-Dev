import express from "express"
const router=express.Router();
let logging=(req,res,next)=>{
  console.log("this is the midddleware")
  console.log(req.url)
  next();
}
router.get("/",(req,res)=>{
  res.send("server is running")
})
router.get("/user",(req,res)=>{
  res.send()
})
router.get("/signin",(req,res)=>{
  res.send("this is the signin page")
})
router.get("/signout",(req,res)=>{
   res.send("this is the signout page")
})
export default router;