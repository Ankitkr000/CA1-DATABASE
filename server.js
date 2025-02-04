const express=require("express")
const app=express()
const connectDB=require("./config/db")

const port=8080

app.get("/",(req,res)=>{
    res.send("Root page-Working")
})

connectDB()
app.listen(port,()=>{
    console.log("server is running")
})