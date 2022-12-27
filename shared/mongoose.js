const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/Ec", { useNewUrlParser: true }).then(()=>{
    console.log('conncted')
}).catch((err)=>{
    console.log(errr)
})