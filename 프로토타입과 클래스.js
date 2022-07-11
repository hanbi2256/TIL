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