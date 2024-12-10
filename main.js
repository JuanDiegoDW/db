import express from "express"
import { Router } from "express"
import { Sequelize } from "sequelize"



const app = express();

const router = Router();


const sequelize =  new Sequelize("dev" , "dev" , "123456" , {
	host: "172.17.2.135",
	dialect: "postgres"
	
})

console.log("test")

router.get("/",(req,res)=>{
	res.send("Hola como estas")
})

app.use(router);
app.listen(3000,()=>{
	console.log("Server on port 3000");
})


