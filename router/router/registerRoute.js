import express from "express"
const router=express.Router();

let loginvalidation=(req,res,next)=>{
  const token=req.query.token;
  if(token == "admin123"){
    next();
  }
  else{
    res.send("access denied")
  }
}

router.get("/login",loginvalidation,(req,res)=>{
  res.send("login route")
})

router.get("/signup",(req,res)=>{
  res.send("signup route")
})
export default router;