const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usermodels"
    },
    docID:{
        type:String,
        required:true
    },
    aName:{
        type:String,
        required:true
    },
    aTel:{
        type:Number,
        required:true
    },
    aProb:{
        type:String,
        required:true
    },
    aTime: {
        type: [String],
        default: ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"],
        required:true
      },
      aStatus:{

        type:String,
        enum:["clear","pending","approved"],
        default:"clear"
      }
    
});

module.exports = mongoose.model("AppointmentModel", AppointmentSchema);
