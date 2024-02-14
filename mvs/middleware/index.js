function logReqRes(filename){
    return(req,res,next) =>{
        console.log("hello middleware1")
        req.myUserNmae = "Prakhar"
        next();
    }
}

module.exports = {logReqRes};