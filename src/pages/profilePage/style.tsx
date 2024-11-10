import styled from "styled-components";

export const ProfilePageContainer = styled.main`
    button.edit{
        width: 105px;
        height: 105px;
        background-color: var(--card_color);
        border: none;
        border-radius: 50%;
        position: absolute;
        top: 160px;
        cursor: pointer;
        left: 1650px;
    }

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

                span, input{
                    margin-left: 5px;
                    color: var(--primary_color);
                    font-size: 64px
                }
                input{
                    width: 80%;
                    border: none;
                    border-bottom: 3px solid var(--primary_text);
                    font-weight: 750;
                    height: 50px;
                    &:focus{
                        outline: none;
                    }
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

                    .edit{
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        background-color: var(--card_color);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transform: translate(148px,-50px);
                        cursor: pointer;
                        transition: 0.2s;

                        &:hover{
                            box-shadow: 2px 2px 0px rgba(0,0,0,.5);
                        }

                        img{
                            width: 11.43px;
                            height: 11.43px;
                        }
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
        p,textarea{
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
            color: var(--secondary_text);
            font-family: "Roboto", sans-serif;
            margin-top: 64px;
        }

        textarea{
            background-color: transparent;
            outline: none;
            border: none;
            width: 100%;
            resize: none;
        }
    }

    footer{
        position: relative;
        top: 236px;
        left: 50%;
        transform: translateX(-50%);
        width: 1368px;
        margin-top: 128px;

        p.disclaimer{
            width: 1240px;
            height: 115px;
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 40px;
            line-height: 42px;
            text-align: center;
            color: var(--dark_green);
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

        .social{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 405px;
            gap: 7px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);

            .link{
                background-color: var(--primary_text);
                width: 96px;
                height: 96px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 77px;
                    height: 77px;
                    transition: .2s;
                    position: absolute;

                    &:nth-child(2):hover{
                        opacity: 0
                    }
                }
                .edit{
                    width: 25px;
                    height: 25px;
                    position: absolute;
                    background-color: var(--card_color);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translate(38px,-30px);
                    cursor: pointer;
                    transition: 0.2s;

                    &:hover{
                        box-shadow: 2px 2px 0px rgba(0,0,0,.5);
                    }

                    img{
                        width: 11.43px;
                        height: 11.43px;
                    }
                }
            }
        }

        .copyright{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 64px;
            gap: 84.45px;

            .location{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
            }
            h5{
                font-family: "Roboto", sans-serif;
                font-weight: 500;
                font-size: 25px;
                line-height: 29.3px;
                color: var(--dark_green);
            }
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

export const ContactContainer = styled.section`
    position: relative;
    top: 236px;
    padding: 128px 64px;
    width: 1368px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--dark_green);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 64px;

    h4{
        width: 1240px;
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 42px;
        line-height: 40px;
        text-align: center;
        color: var(--secondary_text);
    }
    h3,input{
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 64px;
        line-height: 40px;
        text-align: center;
        color: var(--secondary_text);
    }
    input{
        width: 900px;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 3px solid var(--tertiary_text);
    }
`