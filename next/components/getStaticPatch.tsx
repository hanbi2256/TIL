export async function getStaticPaths(){
    return{
        paths:[
            {params:{dynamic:1}},
            {params:{dynamic:2}}

            {params:{dynamic:동적인 값}}
        ],
        //만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄지 여부
        fallback:true,
    }
}