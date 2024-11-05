import { HomePageContainer } from "./style"

const HomePage = () => {
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

            <div className="github_option">
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