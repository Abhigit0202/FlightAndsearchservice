const express=require('express');
const { PORT }=require('./configs/serverconfig');

const setupandStartserver=async ()=>{
    
    //Create server
    const app=express();

    app.listen(PORT,()=>{
        console.log(`Sever is live at ${PORT}`);
        console.log(process.env);
    });
}

setupandStartserver();


