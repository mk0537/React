import { Children, createContext, useState } from "react";
import { Child } from "./Child";

// 1. 새로운 Context 생성하기
export const UserContext = createContext();

// 사용자 정보를 관리하고 하위 컴포넌트에 데이터를
// 제공하기 위한 UsetProvider 컴포넌트
export const UserProvider = ({children}/*App에서 Parent 컴포넌트가 이쪽으로 넘어오게 됨*/) => {

    const [user, setUser] = useState({name : 'john Doe', age : 30 });

    return (
        // Provider : Context에서 제공하는 특수한 컴포넌트
        // value 에 전달하고 싶은 데이터를 적는다.
        <UserContext.Provider value={{user,setUser /*하위로 전달해주고 싶은 데이터*/}}>
            {children}
        </UserContext.Provider>

    )


}
