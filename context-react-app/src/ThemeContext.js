import React, { createContext, useState } from "react";

// 테마 상태(다크 모드인지 라이트 모드인지)를 알려주는
// ThemeContext라는 이름의 '컨텍스트 객체' 생성
// export const : 외부에서 사용할 수 있도록 내보내는 것
export const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false); // 기본값은 라이트모드

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode); // 다크 모드와 라이트 모드를 전환
      };

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
