// middleware allows us to add more functions on our api. 
// import json webtoken
const {sign,verify}=require('jsonwebtoken')
require("dotenv").config()
function createToken(user){
    return sign({
        emailAdd:user.emailAdd,
        userPass:user.userPass
    },//to get secret key we use process . dconfig
    process.env.SECRET_KEY,
    {
        expiresIn:'1h' //this is to tell the login will expire after 1 hour
    }

    )
}

// verify token
function verifyAToken(req, res, next){
    /*
    To prevent undefined error, place ?. before your property.
    */
   try{
        // Retrieve token from req.headers
        console.log("Get token from req.headers['authorization']");
        const token = req.headers["authorization"]
        console.log(token);
        next()
   }catch(e){
        res.json({
            status: res.statusCode,
            msg: e.message
        })
   }
}


module.exports = {
    createToken, verifyAToken
}
// function verifyAToke(req,res,next){//we are placing our token on the cookies and ssigning a variable called autorisation
//     const token = req.headers["authorization"].
// }