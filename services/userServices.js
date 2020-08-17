const User = require('../models/userModel');

let createService = (noidung) =>{

    User.create({
        id: noidung.id,
        username: noidung.username,
        password: noidung.password,
        fullName: noidung.fullName,
        birthDay: noidung.birthDay,
        gender: noidung.gender
    })
    
}

let putService = (nodung,id) => {
    User.update(noidung,{
        where: { 
            id
         }
    })
  
}

let deleteService = (id) =>{
    User.destroy({
        where: { 
            id
         }
    })
}

let getOneService = (id) =>{
    User.findOne({
        where:{
            id
        }
    })
}

let getAllService = () =>{
    User.findAll({})
}

module.exports = {
    createService,
    putService,
    deleteService,
    getOneService,
    getAllService
}