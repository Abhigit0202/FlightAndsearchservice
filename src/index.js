const express=require('express');
const bodyParser=require('body-parser');

const { PORT }=require('./configs/serverconfig');

const setupandStartserver=async ()=>{
    
    //Create server
    const app=express();

    //setting up middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    
    app.listen(PORT,()=>{
        console.log(`Sever is live at ${PORT}`);
    });
}

setupandStartserver();


