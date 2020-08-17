const express = require('express');
const router = express();
const User = require('../models/userModel');

router.get('/', (req, res) =>{
    User.findAll({})
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.status(500).json("ERROR...")
    })
})

router.get('/:id', (req, res) =>{
    var id = req.params.id;

    console.log(id);

    User.findOne({
        where:{
            id
        }
    })
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.status(500).json("ERROR...")
    })
})

router.post('/', (req, res) =>{
    var id = req.body.id;
    var username = req.body.username;
    var password = req.body.password;
    var fullName = req.body.fullName;
    var birthDay = req.body.birthDay;
    var gender = req.body.gender;

    User.create({
        id: id,
        username: username,
        password: password,
        fullName: fullName,
        birthDay: birthDay,
        gender:  gender
    })
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        console.log(err);
    })
    
})

router.put('/:id', (req, res) =>{

    User.update(req.body,{
        where: { 
            id: req.params.id
         }
    })
    .then(data =>{
        if(data){
            res.json("Đã cập nhật xong")
        }
       else{
            res.json("Cannot update")
       }
    })
    .catch(err =>{
        console.log('ERROR...')
    })
})

router.delete('/:id', (req, res) =>{

    User.destroy({
        where: { 
            id: req.params.id
         }
    })
    .then(data =>{
        if(data){
            res.json("Đã xóa xong")
        }
        else{
            res.json("Cannot Delete")
        }
       
    })
    .catch(err =>{
        console.log('ERROR...')
    })
})

module.exports = router;
