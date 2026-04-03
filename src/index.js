const express=require('express');
const bodyParser=require('body-parser');
const { PORT }=require('./config/serverconfig');
const ApiRoutes=require('./routes/index');

const setupandStartserver=async ()=>{
const db=require('./models/index');

const {Airplane}=db;

    //Create server
    const app=express();

    //setting up middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async ()=>{
        console.log(`Server is live at ${PORT}`);
        if(process.env.SYNC_DB){
            await db.sequelize.sync({alter:true});
            console.log('Database synced successfully');
        }
        await Airplane.create({
            modelNumber:'Bombardier CRJ900',
        })
    });
}

setupandStartserver();


