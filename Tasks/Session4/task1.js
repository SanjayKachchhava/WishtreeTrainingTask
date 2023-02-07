const argv = require('yargs')
    .scriptName('PrintScript')
    .usage('Usage : $0 <command> [options]')
    .command('print-username', 
    'Description : printing username',
    builder = (yargs)=>{
        yargs.options('username', {
            type:'string',
            // default: 'unknown',
            describe: 'username is optional',
            alias: 'u',
            demandOption : true
        })
    },
    handler = (argv)=>{
        // console.log(argv);
        console.log('username:',argv.username);
    }).help().argv;

