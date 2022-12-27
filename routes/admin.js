var express = require('express');
var router = express.Router();
const multer  = require('multer');

const fileupload=require('express-fileupload')
const db=require('../database/product')
/* GET users listing. */
router.get('/', async function(req, res, next) {
    await db.find().then((products)=>{
    console.log(products)
    res.render('admin/view-products',{admin:true ,products})
  })
  })
router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})


router.post('/add-product', function (req, res) {
  let sampleFile = req.files.datas
  let uploadPath = __dirname + '/Ecommerse/' + sampleFile.name;
  sampleFile.mv(uploadPath, function(err) {
    if (err)
  
     return
     db.create({
      ...req.body,img_url:uploadPath

     }).then((result)=>{
      console.log(result)
      // res.redirect('/admin');
    
    })
  
  });



});
 
  //   let images=req.files.img_url
  //   images.mv()
  //  console.log(result._id)
  // }).catch((err)=>{
  //   console.log(err)
  // })
  //  res.redirect('/admin')
  //  console.log(req.files.datas, req.body)
  


module.exports = router;