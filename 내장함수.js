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

findlndex
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