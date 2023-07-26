const express=require('express');
const path=require('path');
const db=require('./config/mongoose');
const app=express();
const port=8000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('./assets'));

app.use(express.urlencoded());

app.use('/',require('./routes/index'));  //this has router and the functions,so it recieves './addtask'from browser and sends to the controller defined in home_Controller

app.listen(port,function(err){
    if(err){
        console.log('error running the server!');
        return;
    }
    console.log('server is runnning on port ',port);
})

/*
app.get('/',function(req,res){
    //res.send('cool,its running');
    return res.render('home');
})*/

