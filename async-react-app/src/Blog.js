import axios from "axios";
import { useState, useEffect } from "react";

// 블로그 프로그램 만들기
// 1. 게시물 리스트를 블러오는 기능
// 2. 게시물 추가 기능
// 3. 게시물 삭제 기능

// 제목과 내용을 입력할 수 있는 입력 필드 2개와 옆에 추가 버튼
// 입력 필드 밑에느 게시물 리스트를 출력
// 각각의 게시물은 삭제 버튼이 옆에 있어야 함

export const BlogApp = () => {
    const [posts, setPosts] = useState([]); // 데이터를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [error, setError] = useState(null); // 에러 상태 관리
    const [newPost, setNewPost] = useState({title : '', body : ''})

    useEffect (() => {
        const fetchPosts = async () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(reponse => {
                    setPosts(reponse.data)
                })
                .catch(err => setError(err.message))
                .finally(() => {
                    setLoading(false);
                })
        }
        fetchPosts();
    }, [])



    //게시물 추가
    // jsonPlaceholder에 추가를 요청한다고 해서 진짜 추가되는 건 아님
    // state에 새 게시물을 추가하기
    const addPost = async () => {
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts([response.data,...posts])
                setNewPost({title:'', bodt: ''})
            })
            .catch((err) => {
                setError(err.message);
            })
    }


    // 게시물 삭제
    // jsonPlaceholder에 삭제를 요청한다고 해서 진짜 삭제되는 건 아님
    // 필터링해서 다시 렌더링 하기
    const deletePost = async (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPosts(posts.filter(post => post.id !== id))
    } 



    if(loading) return <p>로딩 중...</p>
    if(error) return <p>Error : {error}</p>

    return (
        <div>
            <h1>블로그 게시물</h1>
            <h2>새 게시물 추가</h2>
            <input 
                type="text"
                placeholder="제목"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title:e.target.value})}
            />
            <textarea
                placeholder="내용"
                vlaue={newPost.body}
                onChange={(e) => setNewPost({...newPost, body:e.target.value})}
            />
            {/* 게시물 리스트  */}
            <button onClick={addPost}>게시물 추가</button>
            <div>
                <h2>게시물 리스트</h2>
                {posts.map(post => (
                    <div key={post.id} 
                        style={{border:'1px solid black', margin:'10px', padding:'10px'}}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <button onClick={() => {}}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )
}