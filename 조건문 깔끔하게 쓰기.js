function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

const isAnimal=name=>['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개'));// true
console.log(isAnimal('노트북'));// false

function getSound(animal)
{
    if(animal==='개') return '멍멍!';
    if(animal==='고양이') return '야옹';
    if(animal==='짹짹') return '짹짹';
    if(animal==='비둘기') return '구구 구 구';
    return '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));

function getSound(animal)
{
    switch(animal)
    {
        case '개':
            return '멍멍!';
            case '고양이':
                return '야옹~';
                case '참새':
                    return '짹짹';
                    case '비둘기':
                    return '구구 구 구';
                    default:
                        return '...?';
    }
}
console.log(getSound('개'));
console.log(getSound('비둘기'));

function getSound(animal)
{
    const sounds=
    {
        개:'멍멍!',
        고양이:'고양이',
        참새:'짹짹',
        비둘기:'구구 구 구'
    };
    return sounds[animal] ||'...?';
}
console.log(getSound('개'));
console.log(getSound('비둘기'));