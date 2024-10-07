let regexp = /^[0-9b-zB-Z!@#$%^&*]{6,}/i;


console.log(regexp.test("Wonderful"));
console.log(regexp.test("Joyful"));
console.log(regexp.test("Happiness"));
console.log(regexp.test("Time"));
console.log(regexp.test("Task"));
console.log(regexp.test("Apple"));

