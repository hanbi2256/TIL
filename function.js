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

