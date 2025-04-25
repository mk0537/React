import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

// 제품 목록으로 가는 링크, 카트 페이지로 가는 링크(제품의 총 개수 - 총 가격)
const Header = () => {
    // 제품의 내용이 담겨 있는 배열을 받음
    const {items} = useContext(CartContext);

    // 총 개수
    const totalCount = items.reduce((sum, item) => sum + item.quantity,0);

    // 총합
    const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div>
            <Link to="/products">Products</Link>{' | '}
            <Link to="/cart">
                Cart({totalCount}) - {totalPrice}원
            </Link>
        </div>
    )
}


export default Header;