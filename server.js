const express = require('express');
const path = require('path');
const logger = require('morgan');
// cross origin access 
const cors = require('cors');
const bcrypt = require('bcrypt');
const Items = require('./models/items.js');
// const User = require('./models/user.js')
// const passport = require('passport');
// const session = require('express-session');
// const initializePassport = require('./config/passport-config')


require('dotenv').config();
require('./config/database.js');


const app = express();

// access
app.use(cors({
    origin: "*"
}));

// logs the different requests to our server
app.use(logger('dev'))

//parse stringified objects (JSON)
app.use(express.json())


// initializePassport(
//     passport,
//     async email => {
//         let user = User.findOne({email: email})
//         return user;
//     },
//     async id => {
//         let user = User.findById(id);
//         return user;
//     },
// )

// app.use(session({
//     // secure: true,
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     cookie: { originalMaxAge: 3600000}
// }))

// server build folder
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/test_route', (req, res) => {
//     res.send("good route!")
// })

// app.get('/session-info', (req, res) => {
//     res.json({
//         session: req.session
//     })
// })

// app.post('/users/signup',async (req, res) => {
//     console.log(req.body);
//     let hashedPassword = await bcrypt.hash(req.body.password, 10)
//     console.log(hashedPassword);
//     // use User model to place user in the database
//     let userFromCollection = await User.create({
//         email: req.body.email,
//         name: req.body.name,
//         password: hashedPassword
//     })
//     console.log(userFromCollection);
//     // sending user response after creation or login
//     res.json("user created")
// });


// app.put('/users/login', async (req, res, next) => {
//     console.log(req.body);
//     passport.authenticate('local', (err, user) => {
//         // console.log(message);
//         if (err) throw err;
//         if (!user) {
//             res.json({
//                 message: "login failed",
//                 user: false
//             })
//         } else {
//             //delete user.password;
//             req.logIn(user, err =>{
//                 if (err) throw err;
//                 res.json({
//                     message: "successfully authenticated",
//                     //remove user
//                 })
//             })
//         }
//     }) (req, res, next)

// })

// Create Product
app.post('/create_product', async (req,res) => {

    const {image: image, priceNumber: price, inventoryNumber: inventory, name: name, description: description, inStock: inStock} = req.body;

    // Model methods usually give us a promise, so we can wait for the response
    let returnedValue = await Items.create({
        image,
        price,
        inventory,
        name,
        description,
        inStock
    });


    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    res.send(returnedValue);
})


// All Product Info
app.get('/get_data', async (req, res) => {
    // get data from database
    let response = await Items.find({});
    console.log(response);
    // send it back to front end
    res.json(response)

})

// Specific Product
app.get('/get_specific_product/:product_id', async (req, res) => {
    let item = req.params.product_id;
    let response = await Items.findOne({_id: item})
    console.log(response);
    res.json(response)

})

// Search by name
app.get('/product/:itemName', async (req, res) => {
    let item = req.params.productName;
    console.log(item);
    let response = await Items.findOne({name: item})
    console.log(response);
    res.json(response)
})

// Delete Path
app.delete("/delete_product/:productId", async (req, res) => {
    let id = req.params.productId;
    
    let response = await Items.findByIdAndDelete(id);
    console.log(response);
 
    res.send({data: `deleted ${response.deletedCount} items.`})
 })

 // Update Product
 app.put('/update_product/:product_id', async (req, res) => {
    let item = req.params.product_id;
    let update = req.body
    console.log(req.body);
    let response = await Items.findByIdAndUpdate(item, update,{new:true}
    //   {name: req.body.name,
    //     description: req.body.description,
    //     image: req.body.image,
    //     price: req.body.priceNumber,
    //     inventory: req.body.inventoryNumber,
    //     inStock: req.body.inStock},
    //    {new: true} 
    );
    console.log("response from collection: ", response);
    res.json(response);
  });
 
  // Buy function
 app.put('/buy_product/:product_id', async (req, res) => {
    let id = req.params.product_id;
    console.log("Purchase ready");
    console.log(req.body);
    let response = await Items.findByIdAndUpdate(id,
      {
        inventory: req.body.newNumber,
        inStock: req.body.inStock
    },
       {new: true} 
    );
    console.log("response from collection: ", response);
    res.json(response);
   
  });


// catch all route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});