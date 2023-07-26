const TaskList=require('../models/task');  //requires the database

//module.exports sends this function to "routes". where it is acqruired
module.exports.home=function(req,res){
    TaskList.find({},function(err,task){
        if(err){
            console.log('Error in fetching list from db');
            return;
        }

        return res.render('home',{  //in home.ejs file it will set the title and todo_list as task.wegot "task" from models
            title:"TooDoo App!",
            todo_list:task   //todo_list is used in home.ejs file to show all the tasks and iterate pover it
        });
    });
};


module.exports.add=function(req,res){
    TaskList.create(req.body,function(err,task){    //creates an entry in TaskList database. the entry has data as req.body
        if(err){
            console.log('error in creating the list');
            return;
        }
        console.log(task);
        return res.redirect('/');
    });
};

module.exports.delete=function(req,res){
    let id=req.query;
    console.log(id);

    let checkboxes=Object.keys(id).length;

    for(let i=0;i<checkboxes;i++){
        TaskList.findByIdAndDelete(Object.keys(id)[i],function(err){
            if(err){
                console.log("error in deleting the item");
                return;
            }
        })
    }
    return res.redirect('back');
};