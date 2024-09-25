//ДЗ 7.1. Робота з обьектом
const car = {
    marka: "Audi",
    model: "Q5",
    year: 2020,
}


function getInfo(){
    for (const key in car) {
        console.log(key + ':', car[key]);
      }
}

console.log("ДЗ 7.1. Робота з обьектом");
getInfo();
car.color = "red";
console.log("Нижче об'єкт з новою властивістю:");
getInfo();


//ДЗ 7.2. Сума вартості послуг
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

    priceAll = [];
    let priceSum = 0;   

function price(){
    
    for (const key in services) {
        priceAll.push(Number(services[key].slice(0 , -4)));
      }
    for(var i = 0; i < priceAll.length; i++){
    priceSum += priceAll[i];
    }
    return priceSum;
}

function maxPrice(){
    return Math.max.apply(null, priceAll);
}

function minPrice(){
    return Math.min.apply(null, priceAll);
}

console.log("");
console.log("ДЗ 7.2. Сума вартості послуг");
price();
console.log("Весь прайс коштує " + priceSum + " грн");
console.log("Мінімальна ціна послуги " + maxPrice() + " грн");
console.log("Максимальна ціна послуги " + minPrice() + " грн");