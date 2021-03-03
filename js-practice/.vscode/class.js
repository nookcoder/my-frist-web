// 1. Class declarations 
class Person{
    //construtor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const nook = new Person('nook', 24);

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }

    get age(){ //값을 return
        return this._age;
    }

    set age(value){ //값을 설정 
        this._age = value < 0 ? 0 : value;
    }
}

const user = new User('hyeonwk','kim', -1); //사용자가 실수로 나이를 -1 로 설정함. 
//3.Public& Private 4.Static

//5.Inheritance 
//a way for one class to extend another class. 
class Shape{
    constructor(width, height, color){
        this.width = width; 
        this.height = height; 
        this.color = color; 
    }

    draw(){
        console.log(`darwing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Ractangle extends Shape{}

class Triangle extends Shape{
    draw(){
        super.draw(); // 부모의 method 호출 
        console.log('triangle');
    }

    getArea(){
        return this.width * this.height / 2; 
    }
}


const rectangle = new Ractangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'blue');

//6. Class checking: instanceOf -> the object is checked whether this is made by the class
console.log(triangle instanceof Triangel);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);