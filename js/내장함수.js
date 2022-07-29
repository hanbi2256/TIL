//foreach
const superheroes = ['아이언맨', '캡틴아메리카', '토르', '닥터스트레인지'];

superheroes.forEach(hero => {
    console.log(hero);
});

//map
const array=[1, 2, 3, 4, 5, 6,7,8];

const squared=[];//새로운 배열에 다른 배열이 제곱 넣기
for(let i=0;i<array.length;i++)
{
    squared.push(array[i]*array[i]);
    
}
console.log(squared);

const array[1, 2, 3, 4, 5,6,7,8];

const squared=[];

array.forEach(n=>{
    squared.push(n*n);
});

console.log(squared);

const array=[1, 2, 3, 4, 5, 6, 7,8];

const square=n=>n*n;
const squared=array.map(square);
console.log(square);

const squared=array.map(n=>n*n);
console.log(squared)

indexOf

const superheroes=['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index=superheroes.indexOf('토르');
console.log(index);

//findlndex
//배열 안에 있는 값이 객체 이거나 배열일때

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);


//fine
//찾아낸 값 자체를 반환
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];
const todo=todos.find(todo=>todo.id===3);
console.log(todo);

//filter
//특정 조건을 만족하는 값들만 추출하여 새로운 배열 생성
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const tasksNotDone=todos.filter(todo=>todo.done===false);
console.log(tasksNotDone)

splice
const numbers=[10, 20, 30, 40];
const index=numbers.indexOf(30);
numbers.splice(index,1);
console.log(numbers);

//slice
//배열열을 잘라낼대 사용, 기존의 배열은 건들X
const numbers=[10, 20, 30, 40];
const sliced=numbers.slice(0, 2);// 0==어디서부터 자를지, 2==어디까지 자를지

console.log(sliced);
console.log(numbers);

//concat
//여러개의 배열을 하나로 합침
const arr1=[1, 2, 3];
const arr2=[4, 5, 6];
const concated=arr1.concat(arr2);
console.log(concated);

//join
//배열 안의 값들을 문자열 형태로 합쳐줌
const arry=[1,2, 3, 4,5];
console.log(arry.join());//1,2,3,4,5
console.log(arry.join(` `));//1 2 3 4 5
console.log(arry.join(`, `));//1, 2, 3, 4, 5

//reduce
const numbers=[1, 2,3 ,4,5];
let sum=arry.reduce((accmulator, current)=>accmulator+current, 0);
console.log(sum);

//총합 구하기
const numbers=[1, 2,3 ,4,5];
let sum=numbers.reduce((accmulator, current)=>
{
    console.log({accmulator, current});
}, 0);
console.log(sum);

//평균 구하기
const numbers=[1, 2, 3, 4, 5];
let sum=numbers.reduce((accmulator, current, index, arry)=>
{
    if(index===arry.length-1)
    {
        return(accmulator+current)/arry.length;
    }
    return accmulator+current;
}, 0);

console.log(sum);








