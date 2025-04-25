import { useState, useEffect } from "react";

export const FetchExam = () => {

    const [posts, setPosts] = useState([]); // 데이터를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [error, setError] = useState(null); // 에러 상태 관리

    useEffect(() => {

        // 비동기 함수를 작성
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                
                // 통신이 잘 되었는지 안 되었는지의 결과에 따라 처리
                if(!response.ok) {
                    throw new Error('데이터를 불러오는 데에 실패했습니다.')
                }
                // 100개의 게시물 데이터가 data로 들어가게 된다.
                const data = await response.json();
                setPosts(data); // 상태를 데이터에 저장

            } catch (error) {
                setError(error.message); //에러 처리
            } finally {
                setLoading(false); // 로딩 상태를 완료로 설정
            }
        }

        fetchData();
    },[])


    // 로딩 중일 때 보여줄 내용
    if(loading) {
        return <p>로딩 중...</p>
    }


    // 에러 발생 시 보여줄 내용
    if(error) {
        return <p>에러 발생 : {error}</p>
    }


    // 데이터를 성공적으로 불러왔을 때 보여줄 내용
    return (
        <div>
            <h1>게시글 목록</h1>
            <ul>
                {posts.slice(0,10).map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}