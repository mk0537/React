import logo from './logo.svg';
import './App.css';
import { Parent } from './Parent';
import { UserProvider } from './UserContext';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';


function App() {
  // ThemeContext 안에 있는 값을 가져오고,
  // 그 중에서 isDarkMode라는 속성만 꺼내서 변수로 저장하는 코드
  const {isDarkMode} = useContext(ThemeContext);
  
  return (
    <div
        style={{
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#000',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>{isDarkMode ? "다크 모드" : "라이트 모드"}</h1>
        <ThemeSwitcher />
    </div>
  )
}

export default App;
