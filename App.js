const express=require("express");
const app=express();
const productRoutes=require("./api/routes/product");
//const orderRoutes=require("./api/routes/order");

app.use("/",productRoutes);
//app.use("/order",orderRoutes);

module.exports=app;