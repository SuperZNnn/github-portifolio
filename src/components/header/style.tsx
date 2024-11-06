import styled from "styled-components"

export const HeaderComponent = styled.header`
    width: 1368px;
    height: 108px;
    background-color: var(--dark_green);
    border-radius: 0px 0px 35.6px 35.6px;
    display: flex;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;

    .header_links{
        width: 775px;
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 64px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        a{
            font-family: "Roboto", sans-serif;
            font-weight: 600;
            font-size: 32px;
            line-height: 37.5px;
            color: var(--secondary_text);
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s;

            &:hover{
                color: var(--primary_color);
            }
        }
    }
    .log_in{
        position: absolute;
        left: 1168px;
        width: 168px;
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 10px;

        img{
            width: 32px
        }
    }
    .log_out{
        width: 150px;
        height: 76px;
        position: absolute;
        left: 1186px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 77px;
            height: 76px;
            background-color: var(--primary_color);
            border: 2px solid var(--dark_green);
            border-radius: 50%;
        }
    }

    p{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 32px;
        line-height: 37.5px;
        color: var(--secondary_text);
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            color: var(--primary_color);
        }
    }
`