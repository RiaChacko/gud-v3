import express from 'express';
import User from "../models/User.js";
import sendEmail from "../email.js";


const router = express.Router();

router.post('/', async (req,res)=>{
    const {email} = req.body;

    if(!email){
        return res.status(400).json({msg: 'Please enter an address'});
    }
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg: 'User already exists!'});
        }
    
        user = new User({email});
        await user.save();
        const subject = 'Welcome to Our Newsletter!';
        const text = 'Thank you for signing up for our newsletter. Stay tuned for updates!';
        await sendEmail(user.email, subject, text);

        res.status(201).json({msg: 'User signed up successfully'});
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});


export default router;