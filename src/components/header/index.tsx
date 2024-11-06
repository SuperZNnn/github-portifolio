import { useState } from "react"
import { HeaderComponent } from "./style"
import { signIn } from "../../hooks/useAuth"

const Header = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false)

    return(
        <HeaderComponent>
            <section className="header_links">
                <a>Início</a>
                <a>Minha história</a>
                <a>Experiências</a>
                <a>Contato</a>
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
                <div className="log_out">
                    <p>Sair</p>
                    <img src="" alt="Profile"/>
                </div>
            )}
        </HeaderComponent>
    )
}
export default Header