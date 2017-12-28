var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    imagePath: {type:String, required:true},
    title: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    cart:{type:Array}

});


module.exports = mongoose.model('Product', userSchema);



// passing a RegExp

var Person = new Schema({ street: street });


// passing an array
var street = {
    type: String
  , validate: [hasNumber, 'street number required']
}
