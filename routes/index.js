const express=require('express');
const router=express.Router();  //creates a router

const homeController=require('../controllers/home_controller');  //requires home_Controller so it can use its functions

console.log('Router loaded');

//adds desired functions to the router 
router.get('/',homeController.home);
router.post('/add-task',homeController.add);
router.get('/delete-task',homeController.delete);

module.exports=router;  //exports this router to the main "index" page