import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    customer: {
        type: String,
        
    },
    invoice: {
        type: String,
        
    },
    invoiceDate: {
        type: String,
        
    },
    invoiceDueDate: {
        type: String,
        
    },
    subject: {
        type: String,
        
    },
    item: {
        type: String,
        
    },
    quantity: {
        type: String,
        
    },
    rate: {
        type: String,
        
    },
    discount: {
        type: String,
        
    },
    amount: {
        type: String,
        
    },
})

const Invoice = mongoose.model("Invoice",invoiceSchema);
export default Invoice

// customer: '',
//         invoice: '',
//         invoiceDate: '',
//         invoiceDueDate: '',
//         subject: '',
//         item: '',
//         quantity: '',
//         rate: '',
//         discount: '',
//         amount: ''