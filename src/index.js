const express=require('express');
const bodyParser=require('body-parser');
const { PORT }=require('./config/serverconfig');
const ApiRoutes=require('./routes/index');

const setupandStartserver=async ()=>{
    
    //Create server
    const app=express();

    //setting up middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async ()=>{
        console.log(`Sever is live at ${PORT}`);
    });
}

setupandStartserver();


