import { HomePageContainer } from "./style"
import { signIn } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { setSession } from "../../hooks/useSession";
import SearchRecomendations from "../../components/searchRecomendations";
import { useRef, useState } from "react";
import { getAllUsers, User } from "../../hooks/storeUsersData";

const HomePage = () => {
    const navigate = useNavigate();
    const users = getAllUsers();

    const userInput = useRef<HTMLInputElement>(null)

    const [showSearchBox, setShowSearchBox] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [showError,setShowError] = useState<boolean>(false)

    const handleFocus = () => {
        setShowSearchBox(true)
        setShowError(false)
    }
    const handleBlur = () => {
        setTimeout(() => {
            setShowSearchBox(false)
        }, 200);
    }

    const handleSearch = () => {
        if (users.find((user: User) => user.name === userInput.current!.value)) {
            navigate(`/profile/${userInput.current!.value}`)
        } else {
            setShowError(true)
        }
    }

    return (
        <HomePageContainer>
            <h1>Digite o nome do usuário que deseja bucar</h1>

            <div className="input_group">
                <input type="text" name="user" id="user" placeholder="Digite o nome do usuário" ref={userInput}
                onFocus={handleFocus} onBlur={handleBlur}
                onChange={(e) => setSearch(e.target.value)}
                />
                {showSearchBox && <SearchRecomendations search={search} complete={(name: string) => {
                    userInput.current!.value = name
                }}/>}

                <button onClick={handleSearch}>
                    <img src="/assets/images/arrow_right.png" alt="Avançar"/>
                </button>
                {showError&&(
                    <p className="warning">
                        <img src="/assets/images/warning.png"/>
                        <span>O nome que você digitou não existe ou não está cadastrado!</span>
                    </p>
                )}
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