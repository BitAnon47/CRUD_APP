const express = require('express')
const router = express.Router()

//importing 
const Employee = require('../Models/employee.model')
const {generateCrudMethods}=require('../services')
const employeeCrud =generateCrudMethods(Employee)
const {validateDbId,rasieRecord404Error} =require('../middleware')

//get All
router.get('/', (req, res,next) => {
    employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})
//get by id
router.get('/:id',validateDbId, (req, res,next) => {
        employeeCrud.getById(req.params.id)
            .then(data => {
                if (data) res.send(data)
                else
                    rasieRecord404Error(req,res)
            })
            .catch(err => next(err))
})

//create operation
router.post('/', (req, res,next) => {
    employeeCrud.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

//update
router.put('/:id',validateDbId,(req,res)=>{
    employeeCrud.update(req.params.id,req.body)
    .then(data => {
                if (data)
                    res.send(data)
                else
                    rasieRecord404Error(req,res)
            })
            .catch(err => next(err))

})

//delete operation
router.delete('/:id',validateDbId,(req,res)=>{
    employeeCrud.delete(req.params.id)
    .then(data => {
        if (data)
            res.send(data)
        else
            rasieRecord404Error(req,res)
    })
    .catch(err => next(err))
})

module.exports = router  