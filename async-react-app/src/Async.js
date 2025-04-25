import axios from "axios";


export const Fetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1') // API 호출 코드
        .then(response => console.log(response)) // json 형식으로 응답을 반환
        .then(data => console.log(data)) // 데이터 출력
        .catch(error => console.lof('Error : ', error)); // 에러 처리

        // response
        // 응답에 대한 메타정보와 본문이 들어있다.
        // status : HTTP 상태코드
        // headers : 응답 헤더를 담고 있는 개체
        // ok : status가 200-299 사이면 true
        // url : 요청을 보낸 최종 URL

        // 본문
        // response의 body는 ReadableStream이기 때문에 직접 읽어서 파싱해야 한다.
        // json() -> json 문자열을 파싱하여 객체로 변환
}

export const Axios = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response.data))
        .catch(error => console.log('Error : ', error));
}