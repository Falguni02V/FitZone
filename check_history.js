require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');
const ChatHistory = require('./backend/models/ChatHistory');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    const histories = await ChatHistory.find({});
    console.log("Total histories:", histories.length);
    if(histories.length > 0) {
        console.log("History 0 messages:", histories[0].messages);
    }
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
