
//1.Variable
//let(added in ES6)
let globalName='global name';
{
    let Name = 'hanbi';
    console.log(Name);
    Name='hello';
    console.log(Name);
    console.log(globalName);
}
    console.log(name);
    console.log(globalName);

    //2.var(don't ever use this)
    //var hoisting(move declaration from bottom to top)
    //has no block scope
    {
        age=4;
        var age;
    }
    console.log(age);

    //3.Contants
    //값이 절대 바뀌지 않음
    const daysInWeek =7;
    const maxNumber =5;

    //4.Variable typs
   
    const count=17;//integer(정수)
    const size=17.1//decimal number(소수)

    console.log(`value: ${count}, type:${type count}`);
    console.log(`value: ${csize}, type:${type size}`);

    //bigInt (fairy new, don't use it yet)
    const bigInt=3423423423423434234234242m;//over(-2**53)~2*53)
    
    //string
    const char='c';
    const brendan='brendan';
    const greeting='hello'+brendan;