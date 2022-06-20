import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    email: {    
        type: String,
        required: true,
        unique: true        
    },
    workPhone: {
        type: String,
    },
    mobilePhone: {
        type: String,
    },
    bankName: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    }

})

const Customer = mongoose.model("Cutomer",customerSchema);
export default Customer

