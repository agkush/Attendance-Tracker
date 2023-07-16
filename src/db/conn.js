const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/attendenceRegistrationForm", {
    //useNewUrlParser: true,
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection: ${e}`);
});


