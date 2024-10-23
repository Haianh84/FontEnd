import styled from "styled-components";
import ButtonCompoent from "../../components/ButtonCompoent/ButtonCompoent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonCompoent)`
    &:hover {
        color: #fff;
        background: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: rgb(13, 92, 182);
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
`
export const CardWrapper = styled.div`
    flex: 0 0 calc((100% - 70px) / 6);
    max-width: calc((100% - 70px) / 6);
    box-sizing: border-box;
`;
