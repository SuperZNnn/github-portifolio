import styled from "styled-components";

export const ProfilePageContainer = styled.main`
    .profile_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 236px;
        width: 1240px;
        height: 400px;
        left: 50%;
        transform: translateX(-50%);

        .perfil{
            width: 320px;
            height: 400px;
            gap: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            img{
                width: 256px;
                height: 256px;
                border: 2px solid var(--dark_green);
                border-radius: 50%;
            }

            h2{
                text-align: center;
                font-weight: 800;
                font-size: 64px;
                line-height: 40px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;
            }

            p{
                text-align: center;
                font-weight: 600;
                font-size: 25px;
                line-height: 28px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;
            }
        }

        .brand{
            width: 500px;
            height: 353px;

            h1{
                font-weight: 800;
                font-size: 64px;
                line-height: 40px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;

                span{
                    color: var(--primary_color);
                }
            }

            p{
                font-weight: 600;
                font-size: 25px;
                line-height: 28px;
                color: var(--primary_text);
                font-family: "Roboto", sans-serif;
                width: 445px;
            }

            .buttons_container{
                width: 500px;
                display: flex;
                justify-content: space-between;

                button{
                    box-sizing: border-box;
                    padding: 12px 50px;
                    border-radius: 16px;
                    border: 1px solid var(--dark_green);
                    box-shadow: 5px 5px 0px var(--primary_color);
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 37.5px;
                    color: var(--secondary_text);
                    font-family: "Roboto", sans-serif;
                    background-color: var(--dark_green);
                    cursor: pointer;
                    transition: 0.2s;

                    &:hover{
                        background-color: var(--primary_color);
                        border-color: var(--primary_color);
                    }
                }
            }
        }
    }

    .history{
        position: relative;
        top: 236px;
        margin-top: 128px;
        width: 1240px;
        height: 504px;
        border-radius: 20px;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        padding: 64px;
        background-color: var(--card_color);
        margin-bottom: 128px;

        h2{
            font-weight: 800;
            font-size: 64px;
            line-height: 40px;
            color: var(--secondary_text);
            font-family: "Roboto", sans-serif;
        }
        p{
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
            color: var(--secondary_text);
            font-family: "Roboto", sans-serif;
            margin-top: 64px;
        }
    }
`

export const ExperiencesContainer = styled.section`
    position: relative;
    top: 236px;
    padding: 64px 0;
    background-color: var(--secondary_color);
    width: 1368px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 64px;

    h2{
        font-family: "Montserrat", sans-serif;
        text-align: center;
        font-weight: 800;
        font-size: 64px;
        line-height: 40px;
        color: var(--secondary_text);
    }
    .experiencies{
        width: 865px;
        gap: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`