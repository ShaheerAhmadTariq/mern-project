import express from "express"
const routes = express.Router();
import User from "./schema/UserSchema.js"
import Customer from "./schema/Customer.js"
import Item from "./schema/Items.js"
import Invoice from "./schema/Invoice.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
routes.post("/signin", async (req, res) => {
    try {
        console.log(req.body)
        if (await User.findOne({ email: req.body.email })) {
            throw new Error("User already exists")
        }
        // hashing password and saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const user = new User({...req.body,
        password: hashedPassword})
        await user.save()
       const  newUser={
            ...user,
            token: jwt.sign({id: user._id}, process.env.JWT)
        }
        res.status(200).json({message:"Signin Successful",data:newUser})

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})

routes.post("/newCustomer", async(req, res) => {
    try {
        console.log(req.body)
        if (await Customer.findOne({ Company: req.body.Company })) {
            throw new Error("Customer already exists")
        }
        const customer = new Customer(req.body)
        await customer.save()
        res.status(200).json({message:"customer Successfully saved"})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})



//login route
routes.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            throw new Error("User does not exist")
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            throw new Error("Password is incorrect")
        }
      const  newUser={
            ...user,
            token: jwt.sign({id: user._id}, process.env.JWT)
        }
        res.status(200).json({message:"Login Successful",data:newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}
)

routes.get("/customer",async(req,res)=>{
try {
    const customers = await Customer.find();
    console.log(customers)
res.status(200).json(customers)
} catch (error) {
    console.log(error)
    res.status(500).json({
        error: error.message
    })
}
})

routes.post("/newItem", async(req, res) => {
    try {
        console.log(req.body)
        if (await Item.findOne({ name: req.body.name })) {
            throw new Error("Item already exists")
        }
        const item = new Item(req.body)
        await item.save()
        res.status(200).json({message:"item Successfully saved"})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }

    
})  

routes.get("/items",async(req,res)=>{
    try {
        const item = await Item.find();
        console.log(item)
    res.status(200).json(item)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
    })


    routes.post("/newInvoice", async(req, res) => {
        try {
            console.log(req.body)
            if (await Item.findOne({ name: req.body.name })) {
                throw new Error("Item already exists")
            }
            const invoice = new Invoice(req.body)
            await invoice.save()
            res.status(200).json({message:"item Successfully saved"})
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: error.message
            })
        }
    
        
    })  

    routes.get("/invoice",async(req,res)=>{
        try {
            const invoice = await Invoice.find();
            console.log(invoice)
        res.status(200).json(invoice)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: error.message
            })
        }
        })
export default routes