function showMessage(message: string): void {
  console.log(message);
}

showMessage("Hello Type Script");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calc(20, 99));

function customError(message: string): never {
  throw new Error(message);
}
