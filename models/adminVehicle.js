import mongoose from "mongoose";
 
const AdminVehicleSchema = new mongoose.Schema({

    vehicleID: {
        type: String,
        unique: true,
        required: true
    },

    



    
});