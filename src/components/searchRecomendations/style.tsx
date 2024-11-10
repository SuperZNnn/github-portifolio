import styled from "styled-components";

export const SearchBox = styled.div`
    position: absolute;
    top: calc((50%) + 6px);
    width: 688px;
    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.169);
    border-radius: 6px;
    border: 1px solid #D6D6D6;
    background-color: #FFFFFF;
    padding: 12px 12px 34px 12px;
    box-sizing: border-box;

    .user{
        display: flex;
        align-items: center;
        gap: 10px;
        color: #C9CACC;
        width: 664px;
        border-bottom: 1px solid #C9CACC;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            color: #000000;
        }

        p{
            font-family: "Roboto", sans-serif;
            font-weight: 600px;
            font-size: 16px;
            line-height: 40px
        }
    }
`