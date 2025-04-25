import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// Routes : switch 같은 개념으로 가장 구체적인 경로를 우선 매칭한다.
// Route : URL과 컴포넌트를 매핑하여 특정 경로에 맞는 컴포넌트를 렌더링한다.
import {About,
        PostDetail,
        UserProfile,
        Dashboard,
        Overview,
        Settings,
        NotFound,
        Login, 
        PrivateRoute} from'./Pages';
import { Navbar } from './Navbar';
import Home,{Categories,Products, ProductDetail} from './Exam';
// Route 컴포넌트의 주요 속성
// 1. path : URL 경로를 정의한다. 사용자가 특정 경로에 접근할 때 어떤 컴포넌트를 렌더링할지 결정한다.
// 2. element : path에 들어 있는 경로와 일치할 때 렌더링할 컴포넌트를 지정한다.

function App() {

  // 아이디랑 비밀번호를 백엔드로 보내서 검증을 받았다고 가정을 해보자
  const isAuthenticated = false;
  
  return (
    <div className="App">

      {/* <Navbar /> */}

      {/* <Routes> */}
        {/* 주소창에 path가 일치하면 컴포넌트를 렌더링한다.
        <Route path="/" element ={<Home />} />
            동적 라우팅이 되는 원리
            리액트 라우터가 내부에서 정규표현식으로 변환을 해준다.
            "/users/:id/settings/:tab"
            /^users/([/^]+)/settings/([^/]+)$/           
         */}

        {/* <Route path="/users/:id" element={<UserProfile />} /> */}
        {/* <Route path="/about" element ={<About />} />
        <Route path="/posts/:postId" element={<PostDetail />} /> */}
        
        {/* /dashboard/ 이하의 모든 경로를 이 라우트가 잡아낸다
            /dashboard/overview, /dashboard/settings 등 */}
        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes> */}

      <Routes>
        {/* <Route path='/' element={<Home />} />
        {/* *의 의미 : 매칭되는 주소가 없을 때
        <Route path='*' element={<NotFound /> } /> */}

        {/* <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} isAuthenticated={isAuthenticated}/>} /> */}

        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Products />} />
        <Route path="/categories/:categoryId/products/:productId" element={<ProductDetail />} />




      </Routes>

    </div>
  );
}

export default App;
