import { HomePageContainer } from "./style"
import { signIn } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { setSession } from "../../hooks/useSession";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <HomePageContainer>
            <h1>Digite o nome do usuário que deseja bucar</h1>

            <div className="input_group">
                <input type="text" name="user" id="user" placeholder="Digite o nome do usuário"/>

                <button>
                    <img src="/assets/images/arrow_right.png" alt="Avançar"/>
                </button>
            </div>

            <div className="or_bar">
                <div className="line"/>
                <p>OU</p>
                <div className="line"/>
            </div>

            <div className="github_option"
                onClick={() => {
                    signIn({callback: (user: string) => {
                        setSession(user)
                        navigate(`/profile/${user}`)
                    },
                });
            }}>
                <p className="label">Acesse sua conta com</p>
                <button>
                    <img src="/assets/images/github_icon.png" alt="GitHub"/>
                    <p>Github</p>
                </button>
            </div>
        </HomePageContainer>
    )
}
export default HomePage