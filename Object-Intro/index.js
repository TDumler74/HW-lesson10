const getElementByIndex = (arr,index)=> arr[index];
const res = getElementByIndex(["lime","orange","lemongrass"],2);
console.log(res);


const getWeatherDescription = function(code,decode){
   return decode(code);
}
const decode = function(code){
    switch(code){
        case "SQ":return "шквал";
        
        case "PO":return "пыльный вихрь";
        case "FC":return "торнадо";
        case "BR":return "дымка (видимость от 1 до 9 км)";
        case "HZ":return "мгла (видимость менее 10 км)";
        case "FU":return "дым (видимость менее 10 км)";
        case "DS":return "пыльная буря (видимость менее 10 км)";
        case "SS":return "песчаная буря (видимость менее 10 км)";
        default: return " ";
    }
}
const res1= getWeatherDescription("BR",decode);
console.log(res1);

const user = {
    name:   "Tatjana",
    age:     48,
    isMarried: true
};
    console.log(user.name);
    user.name= "Anton";


    const person = {
        firstName : "John",
        secondName: "Smith",
        "has dog":true
    }

    console.log(person["has dog"]);

    const key = "firstName";
    const client ={
        firstName: "Frank",
        age:45
    }
    console.log(client[key]);
    console.log(client[key]);//undefinded
    console.log(client.firstName);

    const title = "Titanic";
    const capacity = 1500;

    const titanik = {title, capacity};
    console.log(titanik);

    const name = "Aurora";
    const numberOfGuns = 20;
    const aurora = {
        title:name,
        numberOfGuns
    };
    console.log(aurora);


// Пример 6 
// метод внутри объекта
const dog = {
  name: "Bobbik",
  bark(){
    console.log("woof-woof");
  }
}
dog.bark();



const bicycle= {
    brand: "carver",
    price:899,
    drive(){
        console.log("Driving bicycle");
      }
    }
    bicycle.drive();
const mountainbicycle = {
    __proto__: bicycle,//prototyp 
    price: 500,
    speeds: 7
}
console.log(mountainbicycle.price);
console.log(mountainbicycle.brand);
// Создайте объект транспортное средство vehicle c полями
// - speed со значением 40
// - capacity со значением 4
// - go (){} - который выводит в консоль фразу "Br-br-br-br"


const vehicle ={
    speed :40,
    capacity : 4,
    go(){
        console.log("Br-br-br");
      }
    }
console.log(vehicle);


const  jeep ={
    __proto__:vehicle,
    capacity:5, 
    speed:60,
    numberOfDoors:2
}
console.log(jeep);
console.log(jeep.numberOfDoors);
jeep.go();


// *
// cоздайте bike - c полями на ваше усмотрение

const bike1 = {
    art : "Citybike",
    color: "white",
    speed : 3

}
console.log(bike1);

const motorbicycle ={
    __proto__: bike1,
    speed:200,
    run(){
        console.log("BRRRRR, UM um");
    }
}
console.log(bicycle.color);


// Создайте объект транспортное средство vehicle c полями
// - speed со значением 40
// - capacity со значением 4
// - методом go (){} - который выводит в консоль фразу "Br-br-br-br"

// Создайте на основе транспортного средства - 
// объект jeep - с вместимостью 5, скоростью 60 
// numberOfDoors со значением 2 

// вызовите метод go от jeep

// *
// cоздайте bike - c полями на ваше усмотрение

// * Создайте метод accelerate - который бы увеливал скорость на 5 км 
// * Создайте метод stop - менять скорость на 0
const vehicle1 = {
    speed: 40,
    capacity: 4,
    go() {
      console.log("Br-br-br");
    },
    accelerate() {
      this.speed += 5;
    },
    stop() {
      this.speed = 0;
    }
  };
  
  const jeep1 = {
    __proto__: vehicle1,
    speed: 60,
    capacity: 5,
    numberOfDoors: 2
  }
  
  jeep1.go();
  console.log(jeep1.numberOfDoors);
  console.log(jeep1.speed); // 60
  jeep1.accelerate();       // метод изменил значение поле speed
  console.log(jeep1.speed); // 65


  class Animal{
    constructor ( age,name, color){
        this.age=age;
        this.name=name;
        this.color=color;

    }
    info(){
        console.log("My name is "+ this.name);
    }
  }
  const monkey = new Animal(5,"Chi-chi","brown");
  monkey.info();




















  // Создайт объекты этих двух классов: мартини, конъяк

class Alcohol {
    constructor(title, strength, volume) {
      this.title = title;
      this.strength = strength;
      this.volume = volume;
    }
    drink() {
      console.log("It is nice to drink " + this.title);
    }
  }
  
  class Cognac extends Alcohol {
    constructor(title, strength, volume, age, country) {
      super(title, strength, volume);
      this.age = age;
      this.country = country;
    }
  }
  
  class Martini extends Alcohol {
    constructor(title, strength, volume, sugarAmount) {
      super(title, strength, volume);
      this.sugarAmount = sugarAmount;
    }
  }
  
  // create instances of class
  const ararat = new Cognac("Ararat", 40, 0.7, 10, "Armenia");
  const bianco = new Martini("Bianco", 14, 0.7, 4);
  
  console.log(ararat);
  ararat.drink();
  console.log(bianco);
  bianco.drink();

  class Square {
    #side; // объявили приватное поле 
    constructor(side){
      this.#side = side;
    }
    // специльаные слова get, set 
    get side(){
      return this.#side;
    }
    // сеттер
    set side(value){
      this.#side = value;
    }
  }
  
  const square1 = new Square(4);


