
const mongoose=require('mongoose')


const schema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    description:String,
    img_url:String
    

})

module.exports=mongoose.model('products',schema)