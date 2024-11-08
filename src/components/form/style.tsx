import styled from "styled-components";


export const BlurContainer = styled.main`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgba(109, 109, 109,.5);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        border-radius: 26px;
        background-color: #FFFFFF;

        form{
            padding: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 64px;
            flex-direction: column;

            input,h3{
                width: 739px;
                height: 72px;
            }
            h3{
                font-family: "Montserrat", sans-serif;
                font-weight: 800;
                font-size: 48px;
                line-height: 40px;
                color: var(--dark_green)
            }
            input{
                border: 1px solid #172A3A;
                border-radius: 1px;
                padding: 16px 12px;
                font-family: "Roboto", sans-serif;
                font-weight: 600;
                font-size: 24px;
                line-height: 40px;
                color: var(--tertiary_text);
                border-radius: 8px;

                &:focus{
                    outline: none;
                }
            }
            .buttonsContainer{
                width: 739px;
                height: 88px;
                display: flex;
                justify-content: center;
                align-items: end;
                gap: 24px;

                button{
                    width: 357.5px;
                    height: 64px;
                    padding: 12px 0;
                    font-family: "Roboto", sans-serif;
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 40px;
                    box-sizing: border-box;
                    border-radius: 8px;
                    cursor: pointer;

                    &:nth-child(1) {
                        background-color: var(--secondary_text);
                        border: 1px solid var(--dark_green);
                        color: var(--dark_green);
                    }
                    &:nth-child(2) {
                        background-color: var(--dark_green);
                        color: var(--secondary_text);
                    }
                }
            }
        }
    }
`