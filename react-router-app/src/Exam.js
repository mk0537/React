// URL 파라미터를 사용하여 다국어 지원을 위한 경로 만들기
// Ex) /:lang/home 으로 언어 코드를 받아서 해당 언어에 맞는 내용을 보여준다
// Ex) /eng/home, /kor/home, /jp/home

import { Link, useParams } from "react-router-dom";


// 컴포넌트 이름은 Home
export const Home = () => {
    const {lang} = useParams();

    const content = {
        ko: {
          greeting: '안녕하세요!',
          description: '이것은 한국어 페이지입니다.',
        },
        en: {
          greeting: 'Hello!',
          description: 'This is an English page.',
        },
        jp: {
          greeting: 'こんにちは！',
          description: 'これは日本語のページです。',
        },
      };

      const languageContent = content[lang];

      if(!languageContent){
        return <div>지원하지 않는 언어입니다.</div>
      }

      return(
        <div>
            <h1>{languageContent.greeting}</h1>
            <p>{languageContent.description}</p>
        </div>
      )
}


//카테고리를 보여주는 컴포넌트
//카테고리별 제품을 컴포넌트
//제품의 상세정보를 보여주는 컴포넌트

export const Categories = () => {
  const categories = [
    { id: 1, name: '전자제품' },
    { id: 2, name: '의류' },
    { id: 3, name: '식료품' },
  ]

  return(
    <div>
      <h1>카테고리목록</h1>
      <ul>
        {/* map() : 배열에 들어있는 내용을 순차적으로 꺼내서
        가공을한다. */}
        {/* 카테고리 배열에 들어있는 내용을 하나씩 꺼내서
        리스트로 만들고 URL로 이동할 수 있는 링크를 생성함 */}
        {/* key에 고유한 값이 들어가는건 맞음
        li의 값이 변경될 때 react가 어떤 부분이 변경됐는지
        효율적으로 파악하기 위한 고유 식별자 역할을 한다 */}
        {categories.map(category =>(
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Products = () => {
  //path에서 넘어온 값을 구조분해할당으로 받는다.
  const {categoryId} = useParams();

  const products = [
    { id: 1, name: '노트북', categoryId: '1' },
    { id: 2, name: '스마트폰', categoryId: '1' },
    { id: 3, name: '셔츠', categoryId: '2' },
    { id: 4, name: '청바지', categoryId: '2' },
    { id: 5, name: '사과', categoryId: '3' },
    { id: 6, name: '우유', categoryId: '3' },
  ]

  //카테고리 아이디가 일치하는 제품만 배열에 담는다.
  const filteredProducts = products.filter(product => product.categoryId === categoryId);

  return(
    <div>
      <h1>카테고리 {categoryId}의 상품목록</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <Link to={`/categories/${categoryId}/products/${product.id}`}>
              {product.name}
            </Link>
          </li>))}
      </ul>
    </div>
  )
}

export const ProductDetail = () => {
  const {categoryId, productId} = useParams();

  // 상품 상세 정보를 담은 배열
  const p_detail = [
    { id: 1, name: '노트북', description: '최신형 노트북입니다.', categoryId: '1' },
    { id: 2, name: '스마트폰', description: '최신 스마트폰입니다.', categoryId: '1' },
    { id: 3, name: '셔츠', description: '멋진 셔츠입니다.', categoryId: '2' },
    { id: 4, name: '청바지', description: '편안한 청바지입니다.', categoryId: '2' },
    { id: 5, name: '사과', description: '신선한 사과입니다.', categoryId: '3' },
    { id: 6, name: '우유', description: '신선한 우유입니다.', categoryId: '3' },
  ];

  //filter -> 원하는 조건이 없을 때 빈배열을 반환
  //find -> 못찾으면 undefined
  const product = p_detail.find(item => item.id === Number(productId) && item.categoryId === categoryId)
  
  if(!product){
    return <div>상품을 찾을 수 없습니다.</div>
  }

  return(
    <div>
      <h1>{product.name}</h1>
      <p>카테고리 ID : {categoryId}</p>
      <p>상품 ID : {productId}</p>
      <p>설명 : {product.description}</p>
    </div>
  )
}