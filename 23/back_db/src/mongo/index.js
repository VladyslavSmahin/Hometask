const Mongoose = require("mongoose");
const user = 'timaca8038';
const password = "3CWR7GDM3EIJNzf2";
function mongo(){
    Mongoose.connect(
        `mongodb+srv://${user}:${password}@cluster0.gfosk2u.mongodb.net/?retryWrites=true&w=majority`,
        {}
    ).then(() => {
        console.log(`DB IS ONLINE`);
    }).catch((error) => {
        console.error('DB connection error:', error);
    });
}
module.exports = mongo;
