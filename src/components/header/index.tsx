import { useEffect, useState } from "react"
import { HeaderComponent } from "./style"
import { signIn } from "../../hooks/useAuth"
import { clearSession, getSession, setSession } from "../../hooks/useSession"
import axios from "axios"

type Props = {
    updateUser: () => void
}

const Header = ({updateUser}: Props) => {
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [imgSrc, setImgSrc] = useState<string>('')

    const verifySession = () => {
        const session = getSession()

        console.log(session)
        if (session.login){
            axios.get(`https://api.github.com/users/${session.login}`,{
                headers: {
                    Authorization: 'Bearer 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'
                }
                })
            .then(response=>{
                setIsLogged(true)
                setImgSrc(response.data.avatar_url)
            })
            .catch(error => {
                console.log(error)
            })
        }
        else{
            setIsLogged(false)
        }
    }
    useEffect(() => {
        verifySession()
    },[])

    return(
        <HeaderComponent>
            <section className="header_links">
                <a href="#info">Início</a>
                <a href="#history">Minha história</a>
                <a href="#experiences">Experiências</a>
                <a href="#contact">Contato</a>
            </section>

            {!isLogged && (
                <div className="log_in" onClick={() =>{
                    signIn({
                        callback: (user: string) => {
                            setSession(user)
                            setTimeout(() => {
                                verifySession()
                            }, 200);
                            updateUser()
                        }
                    })
                }}>
                    <img src="/assets/images/log_in_button.png" alt="Login"/>
                    <p>Entrar</p>
                </div>
            )}
            {isLogged && (
                <div className="log_out" onClick={() => {
                    clearSession()
                    setIsLogged(false)
                    updateUser()
                }}>
                    <p>Sair</p>
                    <img src={imgSrc} alt="Profile"/>
                </div>
            )}
        </HeaderComponent>
    )
}
export default Header