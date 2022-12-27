var express = require('express');
var router = express.Router();
var db=require("../database/product")
var userSign=require('../database/userSignDatas')
const bcrypt=require('bcrypt')

const hashvalues=require('../shared/hashValue').hashvalue

const compareValue=require('../shared/hashValue').comparing

/* GET home page. */
router.get('/', async function(req, res, next) {
  let Newuser= req.session.user
  console.log(Newuser)
  await db.find().then((products)=>{
    console.log(products)
    res.render('user/view-products',{user:true ,products})
  })
 
});
router.get('/login',(req,res)=>{
  if(req.session.userLoged){
    res.redirect('/user')
  }
  else{
    res.render('user/login')
  }

})
router.get('/sign',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup', async(req,res)=>{
  let {name,password,email}=req.body
  if(name=="" && email==""){
    res.send("user not found")
}
console.log(password)
password=await hashvalues(password)
console.log(password)
userSign.create({
    name,password,email
}).then((result)=>{
console.log(result)
})
}
)


router.post('/login',async(req,res)=>{
  let {email,password}=req.body
console.log(password)
  if(email==""){
    res.send('please enter a name')
    return
  }
  let oldpassword= await userSign.findOne({email:req.body.email})
  req.session.userLoged=true
  req.session.user=oldpassword
  console.log(oldpassword)
  if(!oldpassword){
    res.send('user not found')
    res.redirect('/user/login')
    return
  }
   else{
    const checkUser=await bcrypt.compare(req.body.password,oldpassword.password).then((response)=>{
      console.log("user found")
     
  
      res.redirect('/user')

        }    )
  
   }
  
})

module.exports = router