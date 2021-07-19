<<<<<<< HEAD
const express = require('express')
const router = express.Router();
const customer = require('../models/customer')
=======
const express = require('express');
const logger = require('../config/winston');
const router = express.Router();
const customer = require('../models/customer')
var logger = require('../config/winston');
>>>>>>> bc8cbc4 (initial commit)




//get Customers List
router.get('/allCustomers', async (req, res) =>{
<<<<<<< HEAD
    let customers = await customer.findAll();
    res.render('index', {
        customers
    });
=======
    
    try {
        let customers = await customer.findAll();
        res.render('index', {
            customers
        });
    } catch (err) {
        console.log(err);
    }
>>>>>>> bc8cbc4 (initial commit)
})


//delete Customer
router.delete('/allCustomers', async(req, res) =>{
    try {
        await customer.destroy({ where: {id: req.body.id}});
        res.send("done!")
    } catch (err) {
<<<<<<< HEAD
        console.log(err);;
=======
        console.log(err);
>>>>>>> bc8cbc4 (initial commit)
    }
})


//update Customers
<<<<<<< HEAD
router.put('/allCustomers', async(req, res) =>{
    const ctm = await customer.findOne({ where:{id: req.body.id}})
    // const customer = await Customer.findByPk()


    try {
        const { id, firstName, lastName, mobileNum, email, address } = req.body;
        ctm.id = id;
        ctm.firstName = firstName;
        ctm.lastName = lastName;
        ctm.mobileNum = mobileNum;
        ctm.email = email;
        ctm.address = address;

        await ctm.save();
        return res.send("done!")
    } catch (err) {
        console.log(err);;
=======
router.put('/allCustomers', async(req, res, next) => {
    const ctm = await customer.findOne({ where:{id: req.body.id}})
    // const customer = await Customer.findByPk()
    const repeatedNum = await customer.findOne({ where:{mobileNum: req.body.mobileNum}})
    console.log(repeatedNum);
    if (repeatedNum) {
        logger.info("invalid update!! this mobile number has been used before")
        return next;
        
    }else{

        try {
            const { id, firstName, lastName, mobileNum, email, address } = req.body;

            ctm.id = id;
            ctm.firstName = firstName;
            ctm.lastName = lastName;
            ctm.mobileNum = mobileNum;
            ctm.email = email;
            ctm.address = address;

            await ctm.save();
            return res.send("done!")
        } catch (err) {
            console.log(err);;
        }
>>>>>>> bc8cbc4 (initial commit)
    }
})


//create a customer
<<<<<<< HEAD
router.post('/allCustomers', (req, res) => {
    console.log(req.body);
=======
router.post('/allCustomers', async(req, res, next) => {
    // console.log(req.body);
    // console.log(req.body.mobileNum);
    const repeatedNum = await customer.findOne({ where:{mobileNum: req.body.mobileNum}})
    console.log(repeatedNum);
    if (repeatedNum) {
        logger.info("invalid Request!! this mobile number has been used before")
        return next;
    }else{

>>>>>>> bc8cbc4 (initial commit)
    let {id, firstName, lastName, mobileNum, email, address } = req.body;
    let errors = [];

    if(!firstName){
        errors.push({text: 'please write firstName'})
    }
    if(!lastName){
        errors.push({text: 'please write lastName'})
    }
    if(!mobileNum){
        errors.push({text: 'please write mobileNum'})
    }
    if(!email){
        errors.push({text: 'please write email'})
    }
    if(!address){
        errors.push({text: 'please write address'})
    }

    // Check for errors
    if(errors.length > 0){
        res.status(403).send( {
            errors,
            id,
            firstName, 
            lastName, 
            mobileNum, 
            email,
            address
        });
    }else{
  
    //insert into table
    customer.create({
        firstName,
        lastName,
        mobileNum,
        email,
        address
    })
        .then(customer => res.send('Done!'))
        .catch(err => console.log(err))
    }
<<<<<<< HEAD
=======
    }

    
>>>>>>> bc8cbc4 (initial commit)
});






module.exports = router;