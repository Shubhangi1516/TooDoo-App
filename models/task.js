const mongoose=require('mongoose');

const listSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    desc:{
        type:String,
        required:true
    },

    cat:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    p:{
        type:String,
        required: true
    }
});

const TaskList=mongoose.model('TaskList',listSchema);

module.exports=TaskList;  //exports to home_controlled, where it is required