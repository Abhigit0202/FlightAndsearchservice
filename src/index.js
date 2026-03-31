const express=require('express');
const bodyParser=require('body-parser');
const { PORT }=require('./config/serverconfig');
const CityRepository = require('./repository/city-repository');

const setupandStartserver=async ()=>{
    
    //Create server
    const app=express();

    //setting up middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    
    app.listen(PORT,async ()=>{
        console.log(`Sever is live at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name:"New Delhi"});
    });
}

setupandStartserver();


