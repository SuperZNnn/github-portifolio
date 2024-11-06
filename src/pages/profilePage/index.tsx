import { useEffect, useState } from "react"
import ExperiencesCard from "../../components/experienciasCard"
import Header from "../../components/header"
import { ContactContainer, ExperiencesContainer, ProfilePageContainer } from "./style"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

type gitApiInfo = {
  imgUrl: string;
  name: string;
  link: string;
  location?: string | null;
  email?: string | null
}

const ProfilePage = () => {
  const { user } = useParams()

  const [gitApiInfo, setGitApiInfo] = useState<gitApiInfo>(
    {
      imgUrl: '/assets/images/github_icon.png',
      name: 'Loading...',
      link: 'https://github.com/',
      location: 'Loading...',
      email: 'Loading...',
    }
  )

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      setGitApiInfo({
        imgUrl: response.data.avatar_url,
        name: response.data.name,
        link: response.data.html_url,
        location: response.data.location,
        email: response.data.email,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <ProfilePageContainer>
      <Header />
      
      <section className="profile_info">
        <div className="perfil">
          <img src={gitApiInfo.imgUrl} alt="profile"/>
          <h2>{gitApiInfo.name}</h2>
          <p>{gitApiInfo.location}</p>
          <p>{gitApiInfo.email}</p>
        </div>

        <div className="brand">
          <h1>Hello,</h1>
          <h1 style={{marginTop: '29px'}}>I'm <span>Felipe Pato</span></h1>

          <p style={{marginTop: '32px'}}>Olá, meu nome é Felipe Pato e sou dev há 24 anos, sou um senior experiente e potente, sempre disposto a evoluir!</p>

          <div className="buttons_container" style={{marginTop: '32px'}}>
            <Link to={gitApiInfo.link}><button>Github</button></Link>
            <button>LinkedIn</button>
          </div>
        </div>
      </section>  

      <section className="history">
        <h2>Minha história</h2>
        <p>Olá, eu sou Felipe Pato e comecei minha carreira trabalhando em um pequeno escritório na California para meu chefe Elon Musk, fui demitido 2 dias depois por commitar errado e apagar o repositório da empresa. Voltei então a trabalhar de casa criando sites de Yoga para idosos, ganhando muito dinheiro no processo, esses sites eram desenvolvidos usando Fortro e Cobol, ao qual aprendi com meu tio Jhon. No entanto, essa forma de fazer sites não durou muito com o advento das IAs, foi então que decidi estudar muito e acabei passando no processo seletivo da cicada 3301, me tornando assim um grande dev da minha area, hoje trabalho espionando hackers e destruindo governos, eu sou Felipe Pato!</p>
      </section>

      <ExperiencesContainer>
        <h2>Experiências</h2>

        <div className="experiencies">
          <ExperiencesCard/>
          <ExperiencesCard/>
          <ExperiencesCard/>
        </div>
      </ExperiencesContainer>

      <ContactContainer>
        <h4>Sinta-se livre para me contatar a qualquer momento!</h4>
        <h3>felipepatoxx34@gmail.com</h3>
      </ContactContainer>

      <footer>
        <p className="disclaimer">Assim que possível, me envie um email para que possamos trabalhar felizes juntos!</p>

        <div className="social">
          <a href="https://instagram.com">
            <div className="link">
              <img alt="Instagram" src="/assets/socialIcons/insta_color.png"></img>
              <img alt="Instagram" src="/assets/socialIcons/insta_black.png"></img>
            </div>
          </a>
          <a href="https://facebook.com">
            <div className="link">
              <img alt="Facebook" src="/assets/socialIcons/face_color.png"></img>
              <img alt="Facebook" src="/assets/socialIcons/face_black.png"></img>
            </div>
          </a>
          <a href="https://x.com">
            <div className="link">
              <img alt="X" src="/assets/socialIcons/x_color.png"></img>
              <img alt="X" src="/assets/socialIcons/x_black.png"></img>
            </div>
          </a>
          <a href="https://youtube.com">
            <div className="link">
              <img alt="Youtube" src="/assets/socialIcons/you_color.png"></img>
              <img alt="Youtube" src="/assets/socialIcons/you_black.png"></img>
            </div>
          </a>
        </div>
        
        <div className="copyright">
          <div className="location">
            <img alt="Localidade" src="/assets/images/location.png"/>
            <h5>Brasil</h5>
          </div>
          
          <h5>© 2023 Felipe Pato. Todos os direitos reservados.</h5>
        </div>
      </footer>

      
    </ProfilePageContainer>
  )
}
export default ProfilePage