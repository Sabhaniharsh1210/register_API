var register = require('../model/usermodel')

const user_register = async (req,res) => {

    var data = await register.find({"email":req.body.email})

    if(data.length == 0)
    {
        var data = await register.create(req.body);
        res.status(200).json({
            status:"success",
            data
        })
    }
    else
    {
        res.status(200).json({
            status:"this id is alredy registed"
        
        })
    }

}

const user_login = async (req,res) => {
    var data = await register.find({"name":req.body.name})

    if(data.length == 1)
    {
        if(data[0].password == req.body.password)
        {
            res.redirect('/deshboard')
        }
        else
        {
            res.redirect('/')
        } 
    }
    else if(data.length == 0){
        res.redirect('/')
    }
    else
    {
        res.redirect('/')
    }
}

const update_user = async (req,res) => {
    var id = req.params.id;

    var data = await register.findById(id)

    await register.findByIdAndUpdate(id,req.body)

    res.status(200).json({
        status:"success",
        id
    })
}

const delete_user = async (req,res) => {
    var id = req.params.id;

    var data = await register.findByIdAndDelete(id)

    console.log(id);

    res.status(200).json({
        status:"success",
        id
    })
}

const get_user = async (req,res) => {
    var page = req.params.page;
    var limit = 3;
    var start = (page-1)*limit;

    console.log(page)

    var data = await register.find().skip(start).limit(limit);

    res.status(200).json({
        status:"success",
        data,
        page
    })
}

module.exports = {
    user_register,
    user_login,
    update_user,
    delete_user,
    get_user
}