const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://agkush:12112194kush@cluster0.7xualb3.mongodb.net/?retryWrites=true&w=majority", {
    //useNewUrlParser: true,
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection: ${e}`);
});


