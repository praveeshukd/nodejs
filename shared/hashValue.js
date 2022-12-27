const bcrypt=require('bcrypt')


const signup=require('../database/userSignDatas')


async function hashvalue(password){
    const hash=await bcrypt.hash(password,10)
    return hash
    console.log(hash)
}
async function comparing(password,oldpassword){

    
    const compare =await bcrypt.compare(password,oldpassword)
    return compare
}

module.exports={
    hashvalue, comparing
}