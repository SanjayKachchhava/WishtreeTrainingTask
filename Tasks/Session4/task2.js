// console.log(process.argv);
const help = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .scriptName('AreaScript')
    .command('area', 'Find area by width and height', (yargs) => {
        yargs.options('width',{
            type: 'number',
            alias: 'w',
            describe: 'Width of area',
            demandOption: true
        });
        yargs.options('height',{
            type: 'number',
            alias: 'h',
            describe: 'Height of area',
            demandOption: true
        });
    },(argv) => {
        console.log(argv);
        console.log('area : ',(argv.width*argv.height));
    }).help().argv;



    // let obj = {
        
    //     get argv(){
    //         console.log("argv performming...");
    //         return {data : 'test'}
    //     }
    // }

    // console.log(obj.argv)
     