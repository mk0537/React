import React, {useState, useEffect, useRef} from 'react'

const TimerFunction = () => {
    const [time, setTime] = useState(0);
    // useEffect() : 함수형 컴포넌트에서 컴포넌트가 렌더링 되거나, 특정 state의 값이 바뀌었을 때
    //              처리하고 싶은 내용을 자동으로 수행하는 훅
    // 첫 번째 인자 : useEffect() 가 호출됐을 때 처리하고 싶은 내용
    // 두 번째 인자 : 의존성 배열 
    //      ㄴ 생략하면 매 렌더링마다 실행
    //      ㄴ 빈 배열이면 컴포넌트 마운트 시 한 번만 실행
    //      ㄴ 값을 하나 이상 넣으면, 그 값이 바뀔 때마다 실행


    useEffect(() => {
        // setInterval() : 일정한 시간 간격으로 지정된 함수를 반복적으로 실행
        const timer = setInterval(() => {
            setTime((prev) => prev+1); // 1초 간격으로 호출
        },1000);

        // 클린업 함수(선택)
        // 언마운트(컴포넌트가 화면에서 내려가야) 실행된다.
        return () => {clearInterval(timer)};
    }, []);


    return (
        <div>
            <h1>Timer : {time} second</h1>

        </div>
    )
}

// 외부에서 데이터를 불러와 화면에 출력해주는 예제
// fetch() 함수 사용하기
// ㄴ브라우저가 제공하는 네트워크 요청 인터페이스

// 함수 앞에 직접 export -> import 할 때 중괄호 무조건 써주어야 함!
export const UserList = () => {
    const [users, setUsers] = useState([]); // 유저 데이터를 담기 위한 상태
    const [loading, setLoading] = useState(true); // 로딩상태
    const [error, setError] = useState(null); // 에러상태

    // 화면이 떴을 때 유저목록이 이미 보여야 한다. (게시판에 들어가면 게시글이 이미 떠있어야 하는 상태)
    useEffect(() => {
        // async : 이 함수를 비동기 함수로 만들겠다.
        // 비동기 처리란? 특정 작업이 완료되기를 기다리면서도 다른 작업을 계속 실행할 수 있는 방식
        // await : 비동기 함수 안에서만 쓸 수 있다.
        // await이 붙은 함수가 종료될 때까지 비동기 함수는 잠깐 멈춘다.
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                // fetch() 함수를 실행하고 나면 promise 객체를 돌려준다..

                // response.ok : 통신이 잘 되었으면 true, 아니면 false
                if(!response.ok){
                    throw new Error(`HTTP 오류! 상태: ${response.status}`)
                }

                // 통신에 문제가 없었다면
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        }
        // 호출
        fetchUsers();
    }, []);


    if(loading) {
        return <div>로딩 중...</div>
    }

    if(error) {
        return <div>에러 발생 : {error.message}</div>
    }

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )


}


// Count 컴포넌트 만들기
export let Count = () => {
    const [count, setCount] = useState(0);
    const [rendering, setRendering] = useState(0);

    const handleClick = () => {
        setCount(count + 1);  
    };


    useEffect(() => {
        setRendering(rendering + 1);
        console.log('렌더링 완료')
    }, [count])


    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>렌더링 횟수 : {rendering}</h1>
            <button onClick={handleClick}>클릭</button>
        </div>
    );
};


export const Cleanup = (props) =>  {
    // App.js에서 value를 받아서 화면에 출력하기
    const [value,setValue] = useState(props.value)
    const [count,setCount] = useState(props.count);
   
    useEffect(() => {
        console.log(`▶ 이펙트 실행 : ${value}`)

        // 클린업 함수
        // 사이드 이펙트 함수의 return에 들어있는 함수
        return () => {
            setValue(value+1)
        }

    }, [value])

    return (
        <div>
            <h2>▶ 이펙트 실행 : {count}</h2>
            <button onClick={()=>setCount(count+1)}>count 증가</button>
        </div>
    )


}



// 숫자를 증가시키면서 이전 값과 현재 값을 화면에 표시하는 예제
// 함수로 (컴포넌트 X)
const usePrevious = (value) => {
    const prevRef = useRef;
    // prevRef = {current:undefined}

    useEffect(() => {
        prevRef.current = value // 최신 value를 저장
    }, [value])

    return prevRef.current;
}



const PreviousValue = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count); // 이전 값을 저장

    return(
        <div>
            <h2>현재값 : {count}</h2>
            <h3>이전값 : {prevCount !== undefined ? prevCount : '없음'}</h3>
            <button onClick={() => setCount(c => c + 1)}>증가({count})</button>
        </div>
    )
}















// export default -> import 할 때 중괄호 안 써줌
export default TimerFunction;