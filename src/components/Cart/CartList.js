import styled from "styled-components";

const StyledCartList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 45px;
    padding: 30px;
`;

function CartList(props) {
    return <StyledCartList>{props.children}</StyledCartList>;
}

export default CartList;
