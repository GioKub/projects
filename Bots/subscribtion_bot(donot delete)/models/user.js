const Mongoose = require("mongoose")

const userSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  chatId: {
    type: String,
    required: true,
  },
  date:{
      type: String,//Date
      required: true,
  }
})

module.exports = Mongoose.model("User", userSchema)