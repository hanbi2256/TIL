// //TODO:원의 넓이 구하는 함수
function calculateCircleArea(r)
{
    return Math.PI*r*r;
}
const area=calculateCircleArea(4);
console.log(area);//50.26548245743669

function calculateCircleArea(r=1)
{
    return Math.PI*r*r;
}
const area=calculateCircleArea();
console.log(area);// 3.141592653589793

const calculateCircleArea=(r=1)=>Math.PI*r*r;
const area=calculateCircleArea();
console.log(area);