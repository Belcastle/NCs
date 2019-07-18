var url = '';
function log(message){
    //Send an HTTP req
    console.log(message);
}
//2)
module.exports = log;
//1)
// module.exports.log= log;