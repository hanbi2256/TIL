//1.String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals:1+2=${1+2}`);
console.log("hanbi's\n\tbook");

//2.Numer operators
console.log(1+1);//add
console.log(1-1);//substract
console.log(1/1);//divide
console.log(1*1);//multiple
console.log(5%2);//remainder
console.log(2**3);//exponentiation

//3.Assignment operators
let x =3;
let y =6;
x+=y;//x=x+y
x-=y;
x*=y; 
x/=y;

//4. Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//5.Logical operators
//||(or), &&(and), !(not)

//6.Equality
 const n1='5';
 const n2=5;

 //== loose Equality
 console.log(n1==n2);
 console.log(n1!=n2);

 //=== strict Equality
 console.log(n1===n2);
 console.log(n1!==n2);

 //7. if. else if, else
 const n='cfhgfh';
 if(n==='hanbi')
 {
    console.log('hi');
 }
 else if(n==='coder')
 {
    console.log('amazing');
 }
 else{
    console.log('unknow');
 }

 //8.Ternary operators:?
 //condition ? value1 : value2;
 console.log(n==='hanbi'?'yes': 'no');

 const array=[];
let text='';
if(array.length===0)
{
   text='배열이 비어있습니다.';
}
else{
   text='배열이 비어있지 않습니다.';
}
console.log(text);

const array=[];
let text=array.length===0?'배열이 비어있습니다.':'배열이 비어있지 않습니다.';
console.log(text);

const array =[];
letl text=array.length===0
?'배열이 비어있습니다.'
:'배열이 비어있지 않습니다.';
console.log(text);

const condition1=false;
const condition2=false;

const value1=condition1
?'와우!'
:condition2
?'blabla'
:'foo';
console.log(value);



 //9.Switch statement
 const b='IE';
 switch(b)
 {
    case 'IE':
        console.log('go way!');
        break;
    case 'Chrome':
        console.log('love you');
        break;
        default:
 }

 //10. Loops
 //While loop
 let i=3;
 while(i>0)
 {
    console.log(`while: ${i}`);
    i--;
 }

 //do while loop

 do{
    console.log(`do while: ${i}`);
    i--;
 } while(i>0);

 //for loop
 for(i=3;i>0;i--)
 {
    console.log(`for:${i}`);
 }

 //nested loop
 for(let i=0;i<10;i++)
 {
    for(j=0;j<10;j++)
    {
        console.log(`i:${i}, j:${j}`);
    }
 }
 
 for(i=0;i<10;i++)
 {
    console.log(`for:${i}`);
    if(i==8) break;
 }

 for(i=0;i<=10;i++)
 {
    if(i%2==0)
    {
        console.log(`${i}`);
    }
 }