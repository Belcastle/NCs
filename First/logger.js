
//4) Event 
// const EventEmmiter = require("events");//Se copia a logger
// // const em = new EventEmmiter();//Se copia a logger
// var url = 'http://';
// class Logger extends EventEmmiter{
//     log(message){
//         //Send an HTTP req
//         console.log(message);
    
//         this.emit('Logeado', {data: 'cuantos gatos caben en una crema?'});//Signal that an event happened//Se mueve a logger
//     }
// }
// module.exports = Logger;

//3)
// console.log(__filename);
// console.log(__dirname);
// var url = 'http://';
// function log(message){
//     //Send an HTTP req
//     console.log(message);
// }
// module.exports = log;

//2)
// var url = 'http://';
// function log(message){
//     //Send an HTTP req
//     console.log(message);
// }
// module.exports = log;

//1)
// var url = 'http://';
// function log(message){
//     //Send an HTTP req
//     console.log(message);
// }
// module.exports.log= log;