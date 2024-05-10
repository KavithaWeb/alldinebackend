const mongoose = require("mongoose");


const MONGOURI = "mongodb+srv://jabezraja3111997:jabez38@cluster0.ehszuzo.mongodb.net/user-details?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {

  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  }

  catch (e) {
    console.log(e); ''
    throw e;
  }
};

module.exports = InitiateMongoServer;
