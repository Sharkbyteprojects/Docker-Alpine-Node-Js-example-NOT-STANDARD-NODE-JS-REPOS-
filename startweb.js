const http =require("http");
http.createServer((req,res)=>{
	console.log("A INCOMING Request!");
	res.write("This is a Docker Demo\n");
	res.end("Created by Sharkbyte");
}).listen(80,()=>{console.log("I AM ONLINE");})