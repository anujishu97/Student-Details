// business.route.js

const express = require('express');
const businessRoutes = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kanuj8840@gmail.com',
    pass: 'alwaysbehappy'
  }
});
// Require Business model in our routes module
let Business = require('./business.model');
let Signup =require('./signup.model');

businessRoutes.route('/user').post(function (req, res) {
  let signup = new Signup(req.body);
  signup.save()
    .then(signup => {
      res.status(200).json({'user': 'user added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

businessRoutes.route('/userdetails/:username').get(function (req, res) {
 // let {username} = 

 console.log(req.query.username);
  //console.log({username});
  Signup.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      return res.json(businesses);
    }
  });
})

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  var mailOptions = {
    from: 'kanuj8840@gmail.com',
    to: req.body.email,
    subject: 'Thanks for submission',
    text: 'Your request has been updated successfully. We will reach out to you soon'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  business.save()
    .then(business => {
      res.status(200).json({'business': 'Details are added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});



// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  console.log(id);
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.fname = req.body.fname;
        business.email = req.body.email;
        business.dob = req.body.dob;
        business.phone=req.body.phone;

        business.save().then(business => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;
