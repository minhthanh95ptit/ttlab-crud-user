const User = require('../models/userModel');

function getAll(){
    return User.findAll({});
}

function getById(id){
    return User.findOne({
        where:{
            id
        }
    })
}

function createUser(user){
    return User.create(user)
}

function updateOne(id, user){
    return User.update(user,{
        where:{
            id: id
        }
    })
}

function deleteOne(id){
    return User.destroy({
        where:{
            id
        }
    })
}

module.exports = {
    getById : getById,
    getAll : getAll,
    createUser: createUser,
    updateOne: updateOne,
    deleteOne: deleteOne
}
