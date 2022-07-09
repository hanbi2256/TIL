//a와 b의 값을 바꾸시오
let a=1;
let b=2;
console.log(a,b);
let c=a;
b=c;
b=a;
console.log(a,b);
// 주어진 배열을 가지고 다음 질문에 코드를 짜시오.

// 어레이에 마지막 아이템 “Zebra” 제거하기
// 주어진 어레이에 “Dog” 추가하기
// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
// 해당 어레이에는 "Human"이 있는가?
// 해당 어레이에는 “Cat” 이 있는가?
// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
// "Tiger"이후의 값을 제거하시오
// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]
//어레이에 마지막 아이템 "Zebra" 제거하기
 animals.pop();
 console.log(animals);
 //주어진 어레이에 "ㅇog" 추가하기
 animals.push("Dog");
 console.log(animals);
 //주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
 animals.push('Mosquito,Mouse,Mule');
 console.log(animals);
 //해당 어레이에는 "Human"이 있는가?
 console.log(animals.indexOf('Human'));
 //해당 어레이에는 “Cat” 이 있는가?
 console.log(animals.indexOf('Cat'));


 a=4;
 if(a<0)
 {
    console.log("음수");
 }
 else {
    console.log("양수");

 }
 
 a=56;
 
 if(a>=90&&a<=100)
 {
    console.log("A");
 }
 else if(a>=80&&a<=89)
 {
    console.log("B");
 }
 else if(a>=70&&a<=79)
 {
    console.log("C");
 }
 else if(a>=60&&a<=69)
 {
    console.log("D");
 }
else 
{
    console.log("F");
}
input : let skills = ["HTML","CSS","Javascript","React"]
output: 합격 

input:let skills = ["HTML","CSS","Javascript"] 
output: 예비 

input:let skills = ["HTML","CSS"] 
output: 탈락

if(skills[0], skills[1], skills[2], skills[3])
{
    console.log("합격");
}
else if(skills[0], skills[1], skills[2]||skills[0], skills[1], skills[3])
{
    console.log("예비");
}
else{
    console.log("탈락");
}
 
for(1=0;1<100;i++)
{
    console.log(i);
}

for(i=0;i<50;i++)
{
    if(i%3==0)
    {
        console.log("짝");
    }
}

function greet()
{
    console.log("안녕 내 이름은 제시카야");
}
function greet();

function f(message)
{
    console.log(message);
}
console.log("내이름은 홍승재");
function meetAt(year,month,date)
{
    if(year&&month&&date)
    {
        return `${year}년 ${month}월 ${date}일`
    }
    else if(year&&month)
    {
        return `${year}년 ${month}월`
    }
    else (year)
    {
        return `${year}일`
    }
}
console.log(meetAt(2022, 1, 7));

//한번 영화 어벤져스의 캐릭터 아이언맨과 캡틴 아메리카의 정보를 객체안에 집어넣자
 const ironMan = {
     name: '토니 스타크',
     actor: '로버트 다우니 주니어',
     alias: '아이언맨'
 };

const captainAmerica = {
     name: '스티븐 로저스',
    actor: '크리스 에반스',
     alias: '캡틴 아메리카'
 };

 function print(hero) {
     const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor
         } 입니다.`;
     console.log(text);
 }

print(ironMan);
 print(captainAmerica);

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print(hero)
{
    const{alias, name, actor}=hero;
    const text=`${alias}(${name})역할을 맡은 배우는
    ${actor}입니다`
    console.log(text);
}
print(ironMan);
print(captainAmerica);



