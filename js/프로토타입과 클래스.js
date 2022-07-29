//객체 생성자
//개체 생성자 이름시작은 대문자로, 새로운 객체를 만들때에는 new키워드를 붙혀야함
function Animal(type , name, sound)
{
    this.type=type;
    this.name=name;
    this.sound=sound;
    this.say=function()
    {
        console.log(this.sound);
    };
}
const dog=new Animal('개', '멍멍이', '멍멈');
const cat=new Animal('고양이', '야옹이','야옹');

dog.say();
cat.say();

//프로토타입
function Animal(type, name, sound)
{
    this.type=type;
    this.name=name;
    this.sound=sound;
}

Animal.prototype.say=function()
{
    console.log(this.sound);
};
Animal.prototype.shareValue=1;

const dog =new Animal('개', '멍멍이', '멍멍');
const cat =new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.shareValue);
confirm.length(cat.shareValue);

//객체 생성자 상속받기
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function () {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();


//class
class Animal{
    constructor(type, name, sound)
    {
        this.type=type;
        this.name=name;
        this.sound=sound;
    }
    say()
    {
        console.log(this.sound);
    }
}

const dog=new Animal('개', '멍멍이', '멍멍');
const cat=new Animal('고양이', '야옹이','야옹');

dog.say();
cat.say();

class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();

class Animal
{
    constructor(type, name, sound)
    {
        this.type=type;
        this.name=name;
        this.sound=sound;

    }
}
class Dog extends Animal{
    constructor(name, sound)
    {
        super('개', name, sound);
    }
}
class Cat extends Animal
{
    constructor(name, sound)
    {
        super('고양이', name, sound);
    }
}

const dog=new Dog('멍멍이', '멍멍');
const dog=new Dog('왈왈이', '왈왈');
const cat =new Cat('야옹이', '야옹');
const cat=new Cat('냐옹이', '냐옹');


dog.say();
dog2.say();
cat.say();
cat2.say();

class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand)
    }
    print() {
        console.log(`${this.name}을/를 파는 음식점들:`)
        console.log(this.brands.join(`, `));
    }
}
const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print()
chicken.print();






