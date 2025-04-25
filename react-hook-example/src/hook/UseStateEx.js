// useState훅을 사용하기 위해서는 import를 해주어야 한다.
import { useState } from "react";

// 컴포넌트 생성하기
// 하나의 파일에 하나의 컴포넌트만 만들 수도 있지만
// 여러개의 컴포넌트를 정의할 수도 있다. (like 내부클래스)

// props(매개변수)로 넘어온 값은 '읽기전용'
let Counter = (props) => {

    //hook은 항상 함수형 컴포넌트 안에서만 사용할 수 있다.
    // useState()는 상태값, 상태값을 바꾸는 함수 <- 이 두 가지를 
    // 요소로 갖는 배열을 반환한다.

    // 반환된 배열을 구조분해할당을 통해서 받는다.
    // 매개변수로 읽어온 값을 변경하기 위해서는 state로 관리를 해야함. -> useState(props.count)
    const [count,setCount] = useState(props.count);

    // 1. 함수를 정의하고 호출하기
    // let handleClick = () => {
    //     setCount(count+1);
    // }

    return (
        <div>
            <h1>{count}</h1>
            {/* 2. 화살표 함수를 이용해 직접 호출 */}
            <button onClick={()=>setCount(count+1)}>up</button>
        </div>
    )
}

// 컴포넌트를 외부에서 import 하기 위해서는 
// 반드시 파일 마지막에 export가 선행되어야 한다.
export default Counter; 
// -> default
// - 하나의 파일(모듈) 당 컴포넌트 1개만 허용
// - import할 때 {}안 해도 됨
// - import할 때 이름 마음대로 저장 가능

// export {Counter};
// named export
// 하나의 파일(모듈) 당 컴포넌트 여러 개를 내보낼 수 있다.
// import 할 때도 expor할 때 쓰던 이름을 {} 안에 정확히 맞춰 써야한다.
// as를 써서 별칭(alias)을 붙일 수 있다.