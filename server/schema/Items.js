import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    unitPrice: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    }

})

const Item = mongoose.model("Item", itemSchema);
export default Item