//Objects 
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object = {key :value}; 
const obj1 = {}; //'object literal' syntaxx
const obj2 = new {}; //'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const person = {name : 'nook', age: 24};
print(person);

person.hasJob = true; // 중간에 추가도 가능하긴 한데 비추천. 
console.log(person.hasJob);

//2. Computed properties
//key should be alwayas string
console.log(person.name); // 보통은 이거 쓰면 됨.
console.log(person['name']);// 동적으로 key 와 관련된 value 를 받아올 때 유용 

function printValue(obj, key){
    console.log(obj[key]); //obj.key 라고 쓰면 obj 에 key 라는 property 가 없잖아? 라고 이해 
}

printValue(person, 'name'); 

// 3. Property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age :  3};
const person3 = {name : 'dave', age: 4};
const person4 = new Person('elile', 30); 

//4. Constructor Function
function Person(name, age){
    this.name = name; 
    this.age = age; 
} 

//5. in operator : property existence check (key in obj)
console.log('name' in person);
console.log('age' in person);
console.log('random' in person);

// 6. for..in vs for..of 
// for(key in obj)
for(key in person){
    console.log(key);
} // 모든 key들을 받아와 처리. 

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for(value of array){
    console.log(value);
}

// 7. Fun cloning 
// Object.assign(dest, [obj1, obj2 ...] )
const user = {name:'nook', age:24};
const user4 = {};
Object.assign(user4, user);
console.log(user4);
