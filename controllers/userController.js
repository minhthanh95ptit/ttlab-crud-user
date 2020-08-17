const User = require('../models/userModel');
const Joi = require('@hapi/joi');
const Schema = require('../validators/valid')
const valid = require('../validators/valid')
const userServices = require('../services/userServices')


module.exports.postController =  async (req, res) =>{

    const { error, value } = valid.validate(req.body);

    if(error){
        res.json(error)
    }
    else{
        try{
            let data = await userServices.createUser(req.body)
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
            let data = await userServices.updateOne(req.params.id, req.body)

            console.log(data);
            
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
    let data = await userServices.deleteOne(req.params.id)
    if(data){
        res.json("Đã xóa xong");
    }
    else{
        res.json("Xóa thất bại")
    }

}

module.exports.getOneController = async (req, res) =>{
    var id = req.params.id;

    let data = await userServices.getById(id);
    return res.json(data);
}

module.exports.getAllController = async (req, res) =>{
    let data = await userServices.getAll()
    return res.json(data);
}