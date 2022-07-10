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