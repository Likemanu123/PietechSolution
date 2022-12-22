const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
})

userSchema.plugin(mongoosePaginate)
module.exports = mongoose.model("user",userSchema)