require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));
    const historyCol = mongoose.connection.db.collection('chathistories');
    if (historyCol) {
        const histories = await historyCol.find({}).toArray();
        console.log("Histories manually:", histories.length);
        if (histories.length > 0) console.log(histories[0]);
    }
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
