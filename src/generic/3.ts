function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: "Serhii", age: 31 };
const obj2 = { job: "Developer", city: "Kyiv" };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj);
