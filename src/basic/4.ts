function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
console.log("============ Task 4 =============");
showMessage("Hallo");
console.log(calc(25, 43));
