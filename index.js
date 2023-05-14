// Задание 1
// Перепишите задание прошлого урока, используя методы get и set

// ---> Задание прошлого урока: Создайте классы:Plant, Rose. 
//Роза должна наследовать Растение. Пусть у растения будут поля: рост, возраст. 
//И метод grow, который увеличивает его рост на 10 см. У розы должно быть поле - количество бутонов (numberOfFlowers). 
//Создайте объект класса розы, вызовите метод.

class Plant {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    };
    set growBaby(value) {
        this.height += value;
    }
    get getHeight()
    {
        return this.height;
    }

};

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this.numberOfFlowers = numberOfFlowers
    }
};
const newPlant = new Plant(80, 2);
const redRose = new Rose(100, 1, 3)
console.log(newPlant.getHeight);
newPlant.growBaby = 10;
console.log(newPlant.getHeight);

console.log(redRose.getHeight);
redRose.growBaby = 11;
console.log(redRose.getHeight);

