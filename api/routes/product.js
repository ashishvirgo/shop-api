const express=require("express");
const router=express.Router();
router.get("/",(req,res,next)=>{
  res.status(200).json({
    message: "Handling Get Request to /products"
  });
});
router.post("/",(req,res,next)=>{
    res.status(201).json({
      message: "Handling Post Request to /products"
    });
  });
  router.patch("/",(req,res,next)=>{
    res.status(200).json({
      message: "Updated Product"
    });
  });
  router.delete("/",(req,res,next)=>{
    res.status(200).json({
      message: "Deleted Product"
    });
  });
  router.get("/:pid",(req,res,next)=>{
    const id=req.params.pid;
    if(id=='special'){
    res.status(200).json({
      message: "you discovered special id",
      id: id
    });
     }
    else{
        res.status(200).json({
            message: "you discovered id"
          });
    }
  });

  module.exports=router;