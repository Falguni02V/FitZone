require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');
const ChatHistory = require('./backend/models/ChatHistory');
const User = require('./backend/models/User');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    const user = await User.findOne({});
    if (!user) { console.log("No user found"); process.exit(0); }
    
    let historyDoc = new ChatHistory({ userId: user._id, messages: [{role: 'user', text: 'test'}] });
    try {
        await historyDoc.save();
        console.log("Saved successfully!");
    } catch(err) {
        console.error("Save error:", err);
    }
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
