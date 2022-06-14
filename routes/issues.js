const express = require("express");
const router= express.Router();
const UserIssueModel= require('../models/user_issues_model');

router.post("/createUserIssue", (req,res)=>{
    const userIssue= new UserIssueModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        EmailId: req.body.EmailId,
        subjectForIssue: req.body.subjectForIssue,
        writeYourIssue:req.body.writeYourIssue
    })
    try{
        const newUserIssue = userIssue.save();
        res.status(201).json(newUserIssue);
    }
    catch(error){
        res.status(400).json({ msg: error });
    }
})

router.get("/getUserIssue", async(req,res)=>{
    try{
        let UserIssue=await UserIssueModel.find();
        res.json(userIssue);
    }
    catch(e){
        res.json({ msg: e });
    }
});

module.exports = router;