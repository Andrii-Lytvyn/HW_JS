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
// "Используйте синтаксис for (key in object) {} и добавьте проверку на наличие ключа apple
//             Если такой ключ существует, то выведите в консоль значение ключа pear присвоив ему новое значение" 
//             delicious");  
console.log(myGarden);
for (let keys in myGarden) {
    if (keys === "apple") {
        console.log("Значение ключа Pear: " + myGarden.pear);
        myGarden.pear = "delicious";
        console.log("Значение ключа Pear: " + myGarden.pear);
    }
}
//Задание 3
// Создайте строку classmates. Перечислите в ней имена нескольких студентов.
// Разбейте строку, используя метод split, положите значение в константу classmatesArr
// Затем соедините массив, используя метод join, положите значение в константу newClassmates

let classmates = "Andrii,Vadim,Andrii,Valentina,Maksim,Elena,Leon";
console.log("Строка classmates: " + classmates);
const classmatesArr = classmates.split(",");
console.log("Массив classmatesArr: ");
console.log(classmatesArr);
const newClassmates = classmatesArr.join("|");
console.log(newClassmates);