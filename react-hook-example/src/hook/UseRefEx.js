import { useEffect, useRef, useState } from "react";


// useRef() 훅 : 변경 가능한 객체 하나를 생성해준다.
// 반환된 객체는 {current : 값} 형태이고, 컴포넌트의 전체 생명주기 동안
// 같은 객체를 유지한다.

// const refContainer = useRef(0);
// (=) const refContainer = {current : 0};

// 주요 특징
// 1. 값 저장
// 렌더링 사이에 값을 기억해두고 싶을 때 사용한다.
// 값이 바뀌어도 리렌더링은 발생시키지 않는다.

// 2. DOM 요소에 접근
// JSX 로 작성한 요소를 ref 속성으로 연결해주면 해당 DOM 노드에
// 직접 접근할 수 있다.

export const Counter_ref = () => {
    const countRef = useRef(0);

    const onClick = () => {
        countRef.current += 1;
        console.log(`현재 카운트 : ${countRef.current}`)
    }

    return (
        <div>
            <h1>{countRef.current}</h1>
            <button onClick={onClick}>증가</button>
        </div>
    )
}


// DOM 접근 예시
export const InputFocus = () => {
    //inputEl = {current : <input ref={inputEl} placeholder="여기에 입력해보세요" /> };
    const inputEl = useRef(null);

    useEffect(() => {
        // 화면에 렌더링 되면 input 태그에 focus를 줘서 바로 입력하게 하기
        inputEl.current.focus(); // 태그에 접근할 수 있다.
    }, [])


    return (
        <div>
            <input ref={inputEl} placeholder="여기에 입력해보세요" />
        </div>
    )



}


// InputSample
// 이름과 닉네임을 입력하는 필드를 만든다
// 이름과 닉네임을 입력하면 밑에 띄운다.
// 초기화 버튼을 만들고 버튼을 누를 시 이름 입력 필드에 포커스가 가도록 만들기

export const InputSample = () => {
    const [inputs, setInputs] = useState({ name: "", nickname: "" });
    const nameRef = useRef(null); 
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        console.log(`name : ${name}, value : ${value}`);
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: "",
            nickname: ""
        });
        nameRef.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameRef} 
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />

            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b> {name} ({nickname})
            </div>
        </div>
    );
};