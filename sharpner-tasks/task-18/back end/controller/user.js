const User = require('../model/user');

exports.postaddUser = async (req,res,next)=>{
    try{
        // console.log('req.body',req.body); // checking if req.body is getting passed from the front end...
        if(!req.body.phone){
            throw new Error('phone number is mandatory');
        }
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const data = await User.create({
            name: name,
            email: email,
            phone: phone,
        });
      res.status(201).json({newUserDetails: data});
    } catch(err){
        console.log('post add user is failing', err)
        res.status(500).json({error:err});
    } 
};

exports.deleteUser = async (req,res,next)=>{
    try{
        if(req.params.id === 'undefined'){
           return res.status(400).json({error:err});
        }
        const uId = req.params.id;
        const deletedRows = await User.destroy({where:{id: uId}});
        if(deletedRows>0){
            console.log(`${uId} successfully deleted`);
            res.sendStatus(200);
        }
        else{
            console.log(`${uId} not deleted`);
            res.status(404).json({error: err});
        }
    } catch(err){
        console.log('delete users is failing', (err))
        res.status(500).json({error:err});
    } 
};

exports.getUsers = async (req,res,next)=>{
    try{
        const users = await User.findAll();
        res.status(200).json({allUsers: users});
    } catch(err){
        console.log('get users is failing', err)
        res.status(500).json({error:err});
    } 
};


