// Поєднання двох об'єктів

//extends object - обмежує дженерік тип можливістю передачі даних об'єкного типу.
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}
