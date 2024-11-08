import { useEffect, useRef, useState } from "react"
import ExperiencesCard from "../../components/experienciasCard"
import Header from "../../components/header"
import { ContactContainer, ExperiencesContainer, ProfilePageContainer } from "./style"
import { useParams } from "react-router-dom"
import axios from "axios"
import { LinkForm } from "../../components/form"
import { changeDisplayName, changeExtraEmail, changeFacebookLink, changeHistory, changeInstagramLink, changeLinkedinLink, changeXLink, changeYoutubeLink, getLocalStorageData, User } from "../../hooks/storeUsersData"

type gitApiInfo = {
  imgUrl: string;
  name: string;
  link: string;
  location?: string | null;
  email?: string | null;
  bio?: string | null;
}

type Props = {
  userLogged?: string | null
  updateUser: () => void
}

const ProfilePage = ({userLogged, updateUser}: Props) => {
  const { user } = useParams()
  const [editMode, setEditMode] = useState<boolean>(false)

  const [linkFormState, setLinkFormState] = useState<boolean>(false)
  const [socialLink, setSocialLink] = useState<string>('')

  const [gitApiInfo, setGitApiInfo] = useState<gitApiInfo>(
    {
      imgUrl: '/assets/images/github_icon.png',
      name: 'Loading...',
      link: 'https://github.com/',
      location: 'Loading...',
      email: 'Loading...',
      bio: ''
    }
  )
  const [userInfo, setUserInfo] = useState<User>({
    name: user || ''
  })

  const inputTitle = useRef<HTMLInputElement>(null)
  const historyTextArea = useRef<HTMLTextAreaElement>(null)
  const extraEmail = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Pegar dados do localStorage
    const { usersArray, userIndex } = getLocalStorageData(user || '');
    if (userIndex !== -1) {
      setUserInfo(usersArray[userIndex]);
    }

    // Pegar dados da API
    axios.get(`https://api.github.com/users/${user}`,{
      headers: {
        Authorization: 'Bearer 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'
      }
    })
    .then(response => {
      setGitApiInfo({
        imgUrl: response.data.avatar_url,
        name: response.data.name,
        link: response.data.html_url,
        location: response.data.location,
        email: response.data.email,
        bio: response.data.bio
      })
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    setEditMode(false)
  },[userLogged])

  const changeLinkedin = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setSocialLink('linkedin')
    setLinkFormState(true)
  }
  const changeInstagram = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setSocialLink('instagram')
    setLinkFormState(true)
  }
  const changeFacebook = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setSocialLink('facebook')
    setLinkFormState(true)
  }
  const changeX = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setSocialLink('x')
    setLinkFormState(true)
  }
  const changeYou = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setSocialLink('youtube')
    setLinkFormState(true)
  }
  
  const handleCallback = (link: string) => {
    if (socialLink === 'linkedin'){
      changeLinkedinLink(user || '', link)
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        linkedinLink: link
      }));
    }
    if (socialLink === 'instagram'){
      changeInstagramLink(user || '', link)
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        instaLink: link
      }));
    }
    if (socialLink === 'facebook'){
      changeFacebookLink(user || '', link)
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        faceLink: link
      }));
    }
    if (socialLink === 'x'){
      changeXLink(user || '', link)
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        xLink: link
      }));
    }
    if (socialLink === 'youtube'){
      changeYoutubeLink(user || '', link)
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        youLink: link
      }));
    }
  }

  useEffect(() => {
    if (editMode && inputTitle.current){
      inputTitle.current.value = userInfo.displayName ? userInfo.displayName : gitApiInfo.name
    }
    if (editMode && historyTextArea.current){
      historyTextArea.current.value = userInfo.history ? userInfo.history : 'Adicione sua história'
    }
    if (editMode && extraEmail.current){
      extraEmail.current.value = userInfo.extraEmail ? userInfo.extraEmail : ''
    }
  },[editMode])

  return (
    <ProfilePageContainer>
      <Header updateUser={updateUser}/>

      {userLogged === user && (
        <button className="edit" onClick={() => {setEditMode(!editMode)}}>
          <img src={`${editMode ? '/assets/images/check.png':'/assets/images/edit_icon.png'}`}/>
        </button>
      )}
      
      <section className="profile_info" id="info">
        <div className="perfil">

          <img src={gitApiInfo.imgUrl} alt="profile"/>
          <h2>{gitApiInfo.name}</h2>
          <p>{gitApiInfo.location}</p>
          <p>{gitApiInfo.email}</p>
        </div>

        <div className="brand">
          <h1>Hello,</h1>
          <h1 style={{marginTop: '29px'}}>I'm 
            {!editMode && (
              <span>{userInfo.displayName ? userInfo.displayName : gitApiInfo.name}</span>
            )}
            {editMode && (
              <input ref={inputTitle}
              onChange={() => {
                setUserInfo((prevUserInfo) => ({
                  ...prevUserInfo,
                  displayName: inputTitle.current?.value || ''
                }));
                changeDisplayName(user || '', inputTitle.current?.value || '')
              }}
              />
            )}
          </h1>

          <p style={{marginTop: '32px'}}>{gitApiInfo.bio}</p>

          <div className="buttons_container" style={{marginTop: '32px'}}>
            <a href={gitApiInfo.link}><button>Github</button></a>
            <a href={userInfo.linkedinLink ? userInfo.linkedinLink : 'https://www.linkedin.com'}>
              <button>
                LinkedIn

                {editMode && (
                  <div className="edit" onClick={changeLinkedin}>
                    <img src="/assets/images/edit_icon.png"/>
                  </div>
                )}
              </button>
            </a>
          </div>
        </div>
      </section>  

      <section className="history" id="history">
        <h2>Minha história</h2>
        {!editMode && (
          <p>{userInfo.history ? userInfo.history : 'Não há nenhuma história pra contar!'}</p>
        )}
        {editMode && (
          <textarea ref={historyTextArea}
          onChange={() => {
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              history: historyTextArea.current?.value || ''
            }));
            changeHistory(user || '', historyTextArea.current?.value || '')
          }}
          />
        )}
      </section>

      <ExperiencesContainer id="experiences">
        <h2>Experiências</h2>

        <div className="experiencies">
          <ExperiencesCard
          title="Dev Junior na NASA"
          during="Junho - 2002 - 2020"
          technologies={["Figma", "React", "Typescript"]}
          description="Trabalhei com figma na nasa construindo designs de foguetes usando figma pro Elon Musk"/>
          <ExperiencesCard
          title="Projeto de caridade na minha cidade"
          during="2 semanas"
          technologies={["Javascript", "Angular"]}
          description="Trabalhei em um projeto na cidade que envolvia Reacr e Scrum para ajudar idosos na minha cidade e seus problemas de movimentação pela cidade."
          repoLink="https://www.google.com"/>
          <ExperiencesCard
          title="Projetão Fellas"
          during="2 meses"
          technologies={["Figma", "React", "Typescript"]}
          description="Um projetão fellas da minha cidade que é muito fellas, um projeto tão fellas que não deixa de ser fellas, um projetinho fellas feito pra ser fellas, agora continuarei escrevendo pra ocupar espaço e ocupar mais espaço e ocupar mais espaço."
          repoLink="https://www.google.com"/>
        </div>
      </ExperiencesContainer>

      {userInfo.extraEmail || editMode ? (
        <ContactContainer id="contact">
          <h4>Sinta-se livre para me contatar a qualquer momento!</h4>
          {editMode ? (
            <input
            ref={extraEmail}
            placeholder="Adicione um email adicional"
            onChange={() => {
              changeExtraEmail(user || '', extraEmail.current?.value || '')
              setUserInfo((prevUserInfo) => ({
                ...prevUserInfo,
                extraEmail: extraEmail.current?.value || ''
              }));
            }}
            />
          ):(
            <h4>{userInfo.extraEmail}</h4>
          )}
        </ContactContainer>
      ): undefined}

      <footer>
        <p className="disclaimer">Assim que possível, me envie um email para que possamos trabalhar felizes juntos!</p>

        <div className="social">
          {userInfo.instaLink || editMode ? (
            <a target="blank" href={userInfo.instaLink ? `https://${userInfo.instaLink}` : 'https://instagram.com'}>
              <div className="link">
                <img alt="Instagram" src="/assets/socialIcons/insta_color.png"></img>
                <img alt="Instagram" src="/assets/socialIcons/insta_black.png"></img>

                {editMode ? (
                  <div className="edit" onClick={changeInstagram}>
                    <img src="/assets/images/edit_icon.png"/>
                  </div>
                ): undefined}
              </div>
            </a>
          ): undefined}
          {userInfo.faceLink || editMode ? (
            <a target="blank" href={userInfo.faceLink ? `https://${userInfo.faceLink}` : 'https://facebook.com'}>
              <div className="link">
                <img alt="Facebook" src="/assets/socialIcons/face_color.png"></img>
                <img alt="Facebook" src="/assets/socialIcons/face_black.png"></img>

                {editMode ? (
                  <div className="edit" onClick={changeFacebook}>
                    <img src="/assets/images/edit_icon.png"/>
                  </div>
                ): undefined}
              </div>
            </a>
          ): undefined}
          {userInfo.xLink || editMode ? (
            <a target="blank" href={userInfo.xLink ? `https://${userInfo.xLink}` : 'https://x.com'}>
              <div className="link">
                <img alt="X" src="/assets/socialIcons/x_color.png"></img>
                <img alt="X" src="/assets/socialIcons/x_black.png"></img>

                {editMode ? (
                  <div className="edit" onClick={changeX}>
                    <img src="/assets/images/edit_icon.png"/>
                  </div>
                ): undefined}
              </div>
            </a>
          ): undefined}
          {userInfo.youLink || editMode ? (
            <a target="blank" href={userInfo.youLink ? `https://${userInfo.youLink}` : 'https://youtube.com'}>
              <div className="link">
                <img alt="Youtube" src="/assets/socialIcons/you_color.png"></img>
                <img alt="Youtube" src="/assets/socialIcons/you_black.png"></img>

                {editMode ? (
                  <div className="edit" onClick={changeYou}>
                    <img src="/assets/images/edit_icon.png"/>
                  </div>
                ): undefined}
              </div>
            </a>
          ) : undefined}
        </div>
        
        <div className="copyright">
          <div className="location">
            <img alt="Localidade" src="/assets/images/location.png"/>
            <h5>Brasil</h5>
          </div>
          
          <h5>© 2024 {gitApiInfo.name}. Todos os direitos reservados.</h5>
        </div>
      </footer>

      {linkFormState && <LinkForm action={(link: string) => {handleCallback(link)}} close={() => {setLinkFormState(false)}}/>}
    </ProfilePageContainer>
  )
}
export default ProfilePage