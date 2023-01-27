function Blog({posts}){
return(
    <ul>
{posts.map(post=>(
    <li>
        {post.title}
    </li>
))}
    </ul>
);
}

export async function getStaticProps() {
    const res=await fetch("https://.../posts");
    const posts=await res.jason();

    return{
        props: {
            posts,
        }
    } 
    
}
export default Blog;

//페이지 콘텐츠가 외부데이터에 연동된다
//기본적으로 page에서 외부 데이터를 가져올 때 사용됩니다. 예를 들면 블로그에서 CMS에 작성한 글을 불러올때 처럼 말이죠.