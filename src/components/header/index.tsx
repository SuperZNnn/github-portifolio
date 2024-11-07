import { useEffect, useState } from "react"
import { HeaderComponent } from "./style"
import { signIn } from "../../hooks/useAuth"
import { clearSession, getSession } from "../../hooks/useSession"
import axios from "axios"

const Header = () => {
    const session = getSession()

    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [imgSrc, setImgSrc] = useState<string>('')

    const verifySession = () => {
        if (session.login){
            setIsLogged(true)
            axios.get(`https://api.github.com/users/${session.login}`)
            .then(response=>{
                setImgSrc(response.data.avatar_url)
            })
        }
        else{
            setIsLogged(false)
        }
    }
    useEffect(verifySession,[])

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
                        callback: () => {
                            setIsLogged(true)
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
                }}>
                    <p>Sair</p>
                    <img src={imgSrc} alt="Profile"/>
                </div>
            )}
        </HeaderComponent>
    )
}
export default Header