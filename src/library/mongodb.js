import mongoose from "mongoose";
import config from "../../config.js";

function dbInitialize() {
    mongoose.connect(config.MONGO_DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DB Connected!");
    }).catch((err) => {
        console.log(err.message);
    })
}

export default {
    dbInitialize,
    mongoose
}