import Header from "../../components/header"
import { ProfilePageContainer } from "./style"

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Header />
      
      <section className="profile_info">
        <div className="perfil">
          <img src="/assets/images/github_icon.png" alt="profile"/>
          <h2>Patoxx</h2>
          <p>Paraíba, SP</p>
          <p>felipepatoxx@gmail.com</p>
        </div>

        <div className="brand">
          <h1>Hello,</h1>
          <h1 style={{marginTop: '29px'}}>I'm <span>Felipe Pato</span></h1>

          <p style={{marginTop: '32px'}}>Olá, meu nome é Felipe Pato e sou dev há 24 anos, sou um senior experiente e potente, sempre disposto a evoluir!</p>

          <div className="buttons_container" style={{marginTop: '32px'}}>
            <button>Github</button>
            <button>LinkedIn</button>
          </div>
        </div>
      </section>  
      
          
    </ProfilePageContainer>
  )
}
export default ProfilePage