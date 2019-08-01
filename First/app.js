//7) HTTP
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('Holi');
        res.end();
    }
    if (req.url === '/api/cursos') {
        // res.write('Uno\nDos\nTres')
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
// server.on('connection',(socket) => {
//     console.log('nueva con');
// });
server.listen(3000);
console.log('Escucho al tres mil');

//6) Event Use
// const EventEmmiter = require("events");//Se copia a logger
// // const em = new EventEmmiter();//Se copia a logger
// // em.emit('Logeado');//Signal that an event happened
// // em.emit('Logeado', {data: 'cuantos gatos caben en una crema?'});//Signal that an event happened//Se mueve a logger
// const Logger = require('./logger');
// const logger = new Logger();
// //Se registra
// logger.on('Logeado', (ar) => {
//     // console.log('Me llamaron');
//     console.log('Me llamaron',ar);
// });
// logger.log('uhhhh');

//5) File System Use
// const fs = require('fs');
// //Synchronous
// // const files = fs.readdirSync('./');
// // console.log(files);
// //Asynchronous// Se puede cambiar './' para ver como muestra error
// fs.readdir('./',function(err,files){
//     if(err) console.log('Error', err);
//     else console.log('Result',files);
// });

//4) OS Use
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('Total Memory: '+totalMemory + '\nFree Memory: '+freeMemory);
// console.log(`\n\nTotal Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

//3) Path Use
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

//2)
// const log = require('./logger');
// log('mes');

//1)
//const logger = require('./logger');
//logger.log('msd')