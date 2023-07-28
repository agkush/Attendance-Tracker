const express = require("express");
const path = require('path');
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());             //works with postman, but here gives undefined data
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register")
});

app.get("/login", (req, res) => {
    res.render("login")
});

//creating a new user in the database
app.post("/register", async (req, res) => {                     //making a async funtion which return a promis
    try {
        // console.log(req.body.firstname);                     //For checking the form response
        // res.send(req.body.firstname);                        //For checking the form response

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {

            const registerStudent = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                subjects: req.body.subjects,
                rollnumber: req.body.rollnumber,
                subject1: req.body.subject1,
                subject2: req.body.subject2,
                subject3: req.body.subject3,
                subject4: req.body.subject4,
                subject5: req.body.subject5,
                subject6: req.body.subject6,
                present1: req.body.present1,
                absent1: req.body.absent1,
                present2: req.body.present2,
                absent2: req.body.absent2,
                present3: req.body.present3,
                absent3: req.body.absent3,
                present4: req.body.present4,
                absent4: req.body.absent4,
                present5: req.body.present5,
                absent5: req.body.absent5,
                present6: req.body.present6,
                absent6: req.body.absent6,
                password: password,
                confirmpassword: cpassword
            })

            const registered = await registerStudent.save();
            res.status(201).render("index");

        } else {
            res.send("Passwords do not match!!");
        }

    } catch (error) {
        res.status(400).send(error);
    }
});

//post method login validation
app.post("/login", async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        //console.log(`Your email is ${email} and your password is ${password}`);         //just for checking errors in the code

        const useremail = await Register.findOne({ email: email });
        // res.send(useremail.password);                                               //for cheacking purpose
        // console.log(useremail);
        if (useremail.password === password) {
            res.status(201).render("yourtracker", { useremail });
        } else {
            res.send("Invalid Login Details");
        }

    } catch (error) {
        res.status(400).send("Invalid Login Details");
    }
});

app.post("/update", async (req, res) => {
    try {
        const { email, buttonId, updatedValue } = req.body;

        // Implementing the logic to update the specific data field based on the button clicked
        await Register.updateOne({ email }, { $set: { [buttonId]: updatedValue } });

        // Respond with a success message
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Error updating data in the database' });
    }
});

app.get('/backtrack', async (req, res) => {
    try {
        const email = req.query.email;
        const useremail = await Register.findOne({ email: email });
        res.status(201).render("yourtracker", { useremail });
    } catch (error) {
        res.status(400).send("Error fetching user data");
    }
})
app.get("/logout", (req, res) => {
    res.render("index");
});
app.listen(port, () => {
    console.log(`System is running on port no. ${port}`);
})

