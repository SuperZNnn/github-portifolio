import styled from "styled-components"

export const HeaderComponent = styled.header`
    width: 1368px;
    height: 108px;
    background-color: var(--dark_green);
    border-radius: 0px 0px 35.6px 35.6px;

    .header_links{
        width: 775px;
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 64px;

        p{
            font-family: "Roboto", sans-serif;
            font-weight: 600;
            font-size: 32px;
            line-height: 37.5px;
            color: var(--secondary_text)
        }
    }
    .log_in{
        position: relative;
        top: 25px; 
        width: 168px;
        height: 25px;
    }
`