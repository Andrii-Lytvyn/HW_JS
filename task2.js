class Garden {
    constructor(orange, apple, pear) {
        this.orange = orange;
        this.apple = apple;
        this.pear = pear;
    };
}
const myGarden = new Garden(1, 2, 3);
console.log(myGarden);
for (let keys in myGarden) {
    console.log(keys.toUpperCase());
}
console.log(myGarden);
console.log();
console.log("Task2 При помощи синтаксиса for (key in object) {} выведите значения всех ключей ");

for (let keys in myGarden) {
    console.log(myGarden[keys]);
}
