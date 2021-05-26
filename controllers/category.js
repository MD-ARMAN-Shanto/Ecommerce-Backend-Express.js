/* ***Node js Ecommerce Site
 *** category controllers
 *** Md. Arman Shanto
 *** Date: 10.12.2020 */
// category imports
const Category = require('../models/category');
const { errorHandler } = require('../helpers/dbErrorHandler');

// creating category middleware
exports.categoryById = (req, res, next, id) =>{
    Category.findById(id).exec((err, category)=>{
        if (err || !category){
            return res.status(400).json({
                error: 'Category does not exist'
            })
        }
        req.category = category;
        next()
    })
}

// creating category controller
exports.create = (req, res) => {

    const category = new Category(req.body);
    category.save((err, data) =>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data })
    });
};

// single category get
exports.read = (req, res)=>{
    return res.json(req.category);
}

// update category controllers
exports.update = (req, res)=>{
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}

// remove category controllers
exports.remove = (req, res)=>{
    const category = req.category;
    category.remove((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({ 
            message:'Category deleted successfully'
        })
    })
}

// get all category controllers
exports.list = (req, res)=>{
    Category.find().exec((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}