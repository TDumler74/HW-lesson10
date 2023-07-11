/*Создайте классы:Plant, Rose. Роза должна наследовать Растение.
Пусть у растения будут поля: 
рост, 
возраст. 
И метод grow,
который увеличивает его рост на 10 см. У розы должно быть поле - 
количество бутонов (numberOfFlowers).
 Создайте объект класса розы, вызовите метод.

*/
class Plant  {
    constructor(hight,age){
       this.hight = hight,
       this.age = age
    }
   grow(){
    this.hight +=10;
   }
}
class Rose extends Plant{
    constructor(hight, age , numberOfFlower){
        super(hight,age);
        this.numberOfFlower = numberOfFlower;
    }
}
const rose = new Rose (30 ,10 , 100);
console.log(rose);
console.log(rose.hight);
rose.grow();
console.log(rose.hight);
/*
Rose { hight: 30, age: 10, numberOfFlower: 100 }
30
40
*/