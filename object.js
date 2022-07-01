//Object

//1.Literals and properties
const obj1={};
const obj2=new Object();
 function print(person)
{
    console.log(person.name);
    console.log(person.age);
}
const hanbi={name:'hanbi', age:4};
print(hanbi);

//2.computed propertise (key string)
console.log(hanbi.name);
console.log(hanbi['name']);

function printValue(obj, key)
{
    console.log(obj[key]);
}
printValue(hanbi, 'name');

//3.for..in vs for..of
for(key in hanbi)
{
    console.log(key);
}

//for (value of interable)
const array=[1,2,4,5];
for(value of array)
{
    console.log(value);
}

//7. fun cloning
const user ={name:'hanbi', age:'17'};
const user2=user;
user2.name='coder';
console.log(user);