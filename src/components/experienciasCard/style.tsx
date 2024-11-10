import styled from "styled-components";

export const CardContainer = styled.section`
    width: 409px;
    height: 503px;
    border-radius: 20px;
    border: 3px solid var(--dark_green);
    background-color: var(--card_color);
    box-shadow: 5px 5px 0px var(--primary_color);
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .middle{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 503px;
        gap: 16px;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: 445px;
        overflow: auto;
        width: 342px;
        overflow-x: hidden;

        &::-webkit-scrollbar{
            width: 10px;
        }

        &::-webkit-scrollbar-track{
            background-color: var(--card_color);
        }

        &::-webkit-scrollbar-thumb{
            background-color: var(--dark_green);
            border-radius: 10px;
        }
    }

    h3{
        font-weight: 800;
        font-size: 32px;
        line-height: 40px;
        color: var(--secondary_text);
        font-family: "Roboto", sans-serif;
    }
    p.during{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        color: var(--tertiary_text);
    }

    .technologies{
        width: 353px;
        padding: 0 8px;
        gap: 10px;
        display: flex;

        p{
            padding: 0 8px;
            background-color: var(--dark_green);
            border-radius: 4px;

            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 12px;
            line-height: 27px;
            color: var(--secondary_text);
        }
    }

    p.descrip{
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        color: var(--secondary_text);
    }

    button{
        width: 353px;
        height: 58px;
        background-color: var(--dark_green);
        border-radius: 6px;
        border: none;
        padding: 10px 0;
        cursor: pointer;

        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
        color: var(--secondary_text);
        text-align: center;

        transform: translate(-6px);

        transition: 0.2s;
        &:hover{
            background-color: var(--primary_color);
        }
    }
`

export const OptionsCardContainer = styled.div`
    position: absolute;
    top: 0;
    width: 406px;
    transform: translate(-32px);
    overflow: hidden;
    border-radius: 20px;
    opacity: 0;
    transition: .2s;
    &:hover{
        opacity: 1;
    }

    .option{
        height: 251.5px;
        transition: .2s;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1){
            background-color: rgba(9, 64, 77, 0.812);
            &:hover{
                background-color: rgba(9, 64, 77, 1);
            }
        }
        &:nth-child(2){
            background-color: rgba(52, 8, 8, 0.659);
            &:hover{
                background-color: rgba(52, 8, 8, 1);
            }
        }
    }
`