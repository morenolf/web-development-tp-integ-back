var mongoose = require("mongoose");

const CreateDBConnection = function(mongoDbConfig){
    stringConnection = mongoDbConfig.url+":"+mongoDbConfig.port+"/"+mongoDbConfig.name;
    console.log("Connecting to MondgoDB: " + stringConnection + " ...");
    mongoose.connect(stringConnection)
    .then(() => { console.log("Connected to MongoDB URL: " + stringConnection); })
    .catch(err => { console.log("Failed to connect to MongoDB: ", err) })
} 

module.exports = { CreateDBConnection }
