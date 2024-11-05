import styled from "styled-components";

export const HomePageContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    h1{
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 40px;
        line-height: 40px;
    }
    
    .input_group{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 788px;

        button{
            width: 83px;
            height: 56px;
            border-radius: 16px;
            border: 1px solid var(--primary_text);
            background-color: var(--tertiary_text);
            transition: 0.2s;
            cursor: pointer;

            &:hover{
                background-color: var(--primary_color);
            }
        }
        input{
            width: 687.88px;
            height: 56px;
            border-radius: 16px;
            border: 1px solid var(--primary_text);

            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 24px;
            line-height: 40px;
            padding-left: 17.12px;

            &:focus{
                outline: none;
            }
        }
    }

    .or_bar{
        width: 788px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .line{
            width: 361px;
            height: 5px;
            background-color: var(--secondary_color);
        }
        p{
            font-weight: 700;
            font-family: "Roboto", sans-serif;
            font-size: 24px;
            line-height: 40px;
            color: var(--primary_text);
        }
    }

    .github_option{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        gap: 16px;

        p.label{
            font-weight: 800;
            font-family: "Roboto", sans-serif;
            font-size: 24px;
            line-height: 40px;
            color: var(--primary_text);
        }

        button{
            width: 130px;
            height: 48px;
            border-radius: 24px;
            padding: 4px 24px;
            background-color: var(--dark_green);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            cursor: pointer;
            transition: 0.2s;

            &:hover{
                background-color: var(--primary_color);
            }

            p{
                font-family: "Roboto", sans-serif;
                font-weight: 800;
                font-size: 16px;
                line-height: 40px;
                color: var(--secondary_text);
            }
        }
    }
`