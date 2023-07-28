const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config();
mongoose.connect( process.env.URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection: ${e}`);
});


