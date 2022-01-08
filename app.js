const mongoose = require("mongoose");
const Person = require("./models/person");

// Connect to mongodb
const dbURI =
  "mongodb+srv://Mahmoudmagdy:qweasdzxc123@project.yngmc.mongodb.net/mongproject?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create and Save a Record of a Model
const person = new Person({
  name: "ahem",
  age: 25,
  favoriteFoods: ["qwe", "weqe"],
});

person
  .save()
  .then((res) => {
    console.log("Added");
  })
  .catch((err) => {
    console.log(err);
  });

// Create Many Records with model.create()

let arrOfPeople = [
  { name: "Ahmed", age: 28, favoriteFoods: ["Steak", "Pasta"] },
  { name: "Ibrahim", age: 25, favoriteFoods: ["Cookies", "Chips"] },
  { name: "Ali", age: 23, favoriteFoods: ["Soup", "Sea food"] },
];

Person.create(arrOfPeople, (err, data) => {
  if (err) {
    console.log(err);
  }
});

// Use model.find() to Search Your Database

Person.find({ name: "Ahmed" }, (err, data) => {
  console.log(err);
});

// Use model.findOne() to Return a Single Matching Document from Your Database

Person.findOne({ favoriteFoods: "Steak" }, (err, data) => {
  console.log(err);
});

// Use model.findById() to Search Your Database By _id

Person.findById({ _id: "61d6d4142a7554ff5e215355" }, (err, data) => {
  console.log(err);
});

// Perform Classic Updates by Running Find, Edit, then Save

Person.findOne({ name: "Ahmed" }, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.favoriteFoods.push("Hamburger");
    res.save((err, data) => {
      console.log(err);
    });
  }
});

// Perform New Updates on a Document Using model.findOneAndUpdate()

Person.findOneAndUpdate(
  { name: "Ahmed" },
  { age: 25 },
  { new: true },
  (err, data) => {
    console.log(err);
  }
);

// Delete One Document Using model.findByIdAndRemove

Person.findByIdAndRemove({ _id: "661d747e689b53912b83ccbca" }, (err, res) => {
  console.log(err);
});

// MongoDB and Mongoose - Delete Many Documents with model.remove()

Person.remove({ name: "Ahmed" }, (err, data) => {
  console.log(err);
});
