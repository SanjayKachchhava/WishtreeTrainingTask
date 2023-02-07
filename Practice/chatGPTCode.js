const yargs = require("yargs");

const options = yargs
  .usage("Usage: -x <num1> -y <num2> -o <operator>")
  .option("x", { alias: "num1", describe: "First number", type: "number", demandOption: true })
  .option("y", { alias: "num2", describe: "Second number", type: "number", demandOption: true })
  .option("o", { alias: "operator", describe: "Operator (+, -, *, /)", demandOption: true })
  .argv;

const num1 = options.num1;
const num2 = options.num2;
const operator = options.operator;

let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator. Please enter a valid operator.");
}


if(result){
    console.log(result);
}
