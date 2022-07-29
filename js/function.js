//function
function printHello()
{
    console.log('Hello');
}
printHello();

function log(message)
{
    console.log(message);
}
log('Hi');
log(1234);

//2. Parameters
function changeName(obj)//코드출력
{
  obj.name='coder';  
}
const hanbi={name:'hanbi'};
changeName(hanbi);
console.log(hanbi);

//Rest parameter
function printAll(...args)
{
    for(let i=0;i<args.length;i++)//args 개수 만큼 출력
    {
        console.log(args[i]);
    }
}
printAll('Hi', 'coding', 'hanbi');

for(const arg of args)//args 값을 차례대로 출력
{
    console.log(arg);

}
printAll('Hi', 'coding', 'hanbi');


//Return a Value
function sum(a, b)
{
    return a + b;
}
const result = sum(1,2);//3
console.log(`sum: ${sum(1,2)}`);

const sump=sum;
console.log(sump(1,3));

//Arrow function
const simpleprint=()=> console.log('simpleprint');
const add=(a,b)=>a+b;

//IIEF
(function hello()
{
    console.log('IIEF');
})();



