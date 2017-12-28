var Product = require('./product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoppingapp');

var products =[new Product({
    imagePath: '../public/images/images.jpeg',
    title: 'Cake1',
    description: 'Good Cake',
    price: 10
}),
    new Product({
        imagePath: '../public/images/images.jpeg',
        title: 'Cake1',
        description: 'Good Cake',
        price: 10
    }),
    new Product({
        imagePath: '../public/images/téléchargement (1).jpeg',
        title: 'Cake2',
        description: 'Super Cake',
        price: 10
    }),
    new Product({
        imagePath: '../public/images/téléchargement.jpeg',
        title: 'Cake2',
        description: 'Nice Cake',
        price: 10
    })
];

var done =0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}