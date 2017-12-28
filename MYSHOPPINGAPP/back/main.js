var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingApp');
var session = require('express-session');
var userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  username: String,
  cart:[{
      imagePath: {type:String},
      title: {type:String},
      description: {type:String},
      price: {type:Number}}]
});
var User = mongoose.model('myuser', userSchema);
var userConnected = '';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function (req, res, next) {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'Math.floor(Math.random()*100000)+1',
  resave: false,
  saveUninitialized: true,
  maxAge: 360000
}));

app.get('/users', function (req, res) {
  if (!req.session.user) res.status(401).send('There is no token');
  else {
    res.status(200).send({
      message: 'Your have a rights to enter with your precise token',
    });
  }
});

app.post('/login', function (req, res) {
 var body = req.body;
 if (body.email && body.password) {
   User.findOne({ email: body.email }, function (err, user) {
     if (user) {
       if (user.password == body.password) {
         req.session.user = user;
         userConnected = true;
         res.status(200).send({ message: 'login sucessfull', user: user});
         console.log(userConnected);
       }
       else {
         res.status(412).send({ message: 'Password does not match' });
       }
     }
     else {
       res.status(404).send({ message: 'No account found with email: ' + body.email});
     }
   });
 } else {
   res.status(412).send({ message: 'You should provide a correct username and a password!' });
 }
});


//
// app.post('/login', function (req, res) {
//   var body = req.body;
//   if (body.email && body.password) {
//     User.findOne({ email: body.email }, function (err, user) {
//       if (user) {
//         if (user.password == body.password) {
//           req.session.user = user;
//           res.status(200).send({ message: 'login sucessfull' });
//         }
//         else {
//           res.status(412).send({ message: 'Password does not match' });
//         }
//       }
//       else {
//         res.status(404).send({ message: 'No account found with email: ' + body.email});
//       }
//     });
//   } else {
//     res.status(412).send({ message: 'You should provide a correct username and a password!' });
//   }
// });

app.post('/create-account', function (req, res) {
  var body = req.body;

  if (body.email && body.password) {
    var newProfile = new User();
    newProfile.username = body.username;
    newProfile.password = body.password;
    newProfile.email = body.email;
    newProfile.save(function (err, savedUser) {
      if (err) {
        res.status(500).send({
          message: 'email Already exits', data: body.email
        });
      } else {
        res.status(200).send({
          message: 'User created', data: newProfile
        });
      };
    });
  } else {
    res.status(412).send({
      message: 'Email and Password  is mandatory to create the user', data: newProfile
    });
  };
});



//
// app.post('/postcart', function (req, res) {
//   var body = req.body;
//   var usercart =
//   if (userConnected) {
//     usercart.cart = body.cart;
//     usercart.save(function (err, savedUser) {
//       if (err) {
//         res.status(200).send({
//           message: 'Cart sent to data base', data: usercart
//         });
//   }
//
//       } else {
//           res.status(412).send({
//             message: 'Error in your input'
//         });
//     }
//   });
// });


app.listen(3501, function () {
  console.log('server listnenning');
});
