
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let regexp = /(@gmail|@yahoo).com/i;
let re = /@/;
new_arr = [];

for (i in arr) {
    for (key in arr[i]) {
        if(re.test(arr[i][key])){
            if(regexp.test(arr[i][key])){
                new_arr.push(arr[i][key]);
            } 
        } 
    }
  }

console.log(new_arr);