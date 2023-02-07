//  require("yargs")
//     .scriptName("greeting")
//     .usage('$0 <cmd> [arguments]')
//     .command(
//         'hello', 
//         'Say hello', 
//         (yargs) => {
//             yargs.positional('--name', {
//                 type: 'string',
//                 // default: 'Jash',
//                 describe: 'the name to say hello to',
//                 demandOption: true,
//               });


//               yargs.positional('--lname',{
//                 type : 'string',
//                 // default : 'Kumar',
//                 describe : 'the last name to say hello to',
//                 demandOption:true
//               });
            
//         },(argv)=>{
//             console.log(argv);
//             console.log(`Hello ${argv.name} ${argv.lname},`,'welcome to my world');
//         }).help().argv;

// const yargs = require('yargs');

// console.log(process.argv);

// console.log(yargs(process.argv.slice(2)).argv);


const yargs = require('yargs')
// console.log(yargs);
yargs.scriptName('greeting script')
    .usage('$0 <cmd> [arguments]')
    .command('_', 'Say hello', (yargs) => {
        // console.log('yargs',yargs);
        // yargs.positional('name', {
        //     type:'string',
            
        //     })
        },(argv)=>{
            console.log(argv);
            // console.log(`Hello ${argv.name}`);
        }).help().argv;
