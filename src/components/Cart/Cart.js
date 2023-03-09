import styled, { css } from "styled-components";

const StyledCard = styled.div`
    position: relative;
`;

const CartImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`;

const CartImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const CartContent = styled.div`
    position: absolute;
    width: calc(100% - 72px);
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    bottom: 0;
`;

const CartTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const CartUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;

const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`;

const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #333;
`;

const CartFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: #000;
`;

const CartAmount = styled.span`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
    );

    ${(props) =>
        props.secondary &&
        css`
            background: linear-gradient(
                86.88deg,
                #20e3b2 1.38%,
                #2cccff 64.35%,
                #fc2872 119.91%
            );
        `}
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

const CartMeta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MetaImg = styled.img`
    margin-right: 12px;
`;

function Cart(props) {
    return (
        <StyledCard>
            <CartImage>
                <CartImg
                    src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                />
            </CartImage>
            <CartContent>
                <CartTop>
                    <CartUser>
                        <UserAvatar
                            src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                        />
                        <UserName>@zndrson</UserName>
                    </CartUser>
                    <CartMeta>
                        <MetaImg src="./icon-heart.svg" alt="heart" />
                        256
                    </CartMeta>
                </CartTop>
                <CartFooter>
                    <CartTitle>Cosmic Perspective</CartTitle>
                    <CartAmount secondary={props.secondary}>
                        12,000 PSL
                    </CartAmount>
                </CartFooter>
            </CartContent>
        </StyledCard>
    );
}

export default Cart;
