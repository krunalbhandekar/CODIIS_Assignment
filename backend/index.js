const express=require("express");
const cors=require("cors");
require("dotenv").config();

const app=express();
app.use(express.json());
app.use(cors());

const connection=require("./Config/config");
const UserRoutes=require("./Routes/UserRoutes")

app.use("/user",UserRoutes)

app.get("/",(req,res)=>{
    return res.status(200).send("HomePage")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("DB Connected")
    }
    catch(err){
        console.log(err)

    }
    console.log(`DB Connected at port ${process.env.PORT}`)
})

