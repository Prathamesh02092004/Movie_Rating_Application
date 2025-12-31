const express=require('express');
const router=express.Router();
const movieController=require('../controller/movies.controller');


router.get('/showMovies',movieController.showMovies)

router.get('/showMovie/:id',movieController.showMovie);

router.post('/add',movieController.createMovie);

router.put('/edit/:id',movieController.editMovie);

router.delete('/delete/:id',movieController.deleteMovie);


module.exports=router;