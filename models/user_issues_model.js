const mongoose=require("mongoose");
const userIssueSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required: false
    },
    EmailId:  {
        type: String,
        required: true
    } ,
    subjectForIssue:{
        type: String,
        required: true
    },
    writeYourIssue: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("UserIssue", userIssueSchema);