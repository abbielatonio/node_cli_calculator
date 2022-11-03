const argvs = process.argv;
const argv = argvs.slice(2);
const operation = argv[0];
const num1 = parseInt(argv[1]);
const num2 = parseInt(argv[2]);

switch (operation) {
  case "add": {
    console.log("sum is " + (num1 + num2));
    break;
  }
  case "subtract": {
    console.log("difference is " + (num1 - num2));
    break;
  }
  case "multiply": {
    console.log("product is " + num1 * num2);
    break;
  }
  case "divide": {
    console.log("quotient is " + num1 / num2);
    break;
  }
}
