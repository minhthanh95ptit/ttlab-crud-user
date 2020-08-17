const User = require('../models/userModel');
const Joi = require('@hapi/joi');
const Schema = require('../validators/valid')
const valid = require('../validators/valid')

module.exports.postController =  async (req, res) =>{

    const { error, value } = valid.validate(req.body);

    if(error){
        res.json(error)
    }
    else{
        try{
            let data = await User.create({
                id: req.body.id,
                username: req.body.username,
                password: req.body.password,
                fullName: req.body.fullName,
                birthDay: req.body.birthDay,
                gender:  req.body.gender    
            })
            res.json(data);
    
        }
        catch(error){
            console.log(error)
        }
    }
   
}

module.exports.putController = async (req, res) =>{
    
    const { error, value } = valid.validate(req.body);

    if(error){
        res.json(error)
    }
    else{
        try{
            let data = await User.update(req.body,{
                where: { 
                    id: req.params.id
                 }
            }) 

            if(data == 1){
                res.json("Đã cập nhật xong");
            }
            else{
                res.json("Cập nhật thất bại")
            }

        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports.deleteController = async (req, res) =>{

    let data = await User.destroy({
        where: { 
            id: req.params.id
         }
    })
    if(data){
        res.json("Đã xóa xong");
    }
    else{
        res.json("Xóa thất bại")
    }

}

module.exports.getOneController = async (req, res) =>{
    var id = req.params.id;

    let data = await User.findOne({
        where:{
            id
        }
    })
    return res.json(data);
}

module.exports.getAllController = async (req, res) =>{
    let data = await User.findAll({})
    return res.json(data);
}