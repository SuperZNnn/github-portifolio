import { useEffect, useRef, useState } from "react"
import ExperiencesCard, { NewExperienceCard } from "../../components/experienciasCard"
import Header from "../../components/header"
import { ContactContainer, ExperiencesContainer, ProfilePageContainer } from "./style"
import { useParams } from "react-router-dom"
import axios from "axios"
import { ExperienceForm, LinkForm } from "../../components/form"
import { changeDisplayName, changeExtraEmail, changeFacebookLink, changeHistory, changeInstagramLink, changeLinkedinLink, changeXLink, changeYoutubeLink, createExperience, editExperience, getLocalStorageData, User } from "../../hooks/storeUsersData"

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
  const [cardFormState, setCardFormState] = useState<boolean>(false)
  const [socialLink, setSocialLink] = useState<string>('')
  const [cardIndex, setCardIndex] = useState<number>()
  const [formInfo,setFormInfo] = useState<User['experiences'] | null>()

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
  const cardCallback = (data: string) => {
    if (cardIndex === -1){
      createExperience(user || '', data)

      setUserInfo((prevState)=>({
        ...prevState,
        experiences: prevState.experiences ? [...prevState.experiences, JSON.parse(data)] : [JSON.parse(data)]
      }))
    }
  
    if (cardIndex && cardIndex > 0){
      setUserInfo((prevState) => {
        const experiencesArray = prevState.experiences ?? [];
    
        const updatedExperiences = [...experiencesArray];
        updatedExperiences[cardIndex - 1] = JSON.parse(data);
    
        return {
          ...prevState,
          experiences: updatedExperiences,
        };
      })
      editExperience(user || '', data, cardIndex - 1)
    }
    setEditMode(true)
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
              type="text"
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
          {userInfo.experiences?.map((experience, index) => (
            <ExperiencesCard
            key={index}
            title={experience.title}
            during={experience.during}
            technologies={experience.technologies}
            description={experience.descrip}
            editMode={editMode}
            link={experience.link}
            setCardFormState={() => {
              setFormInfo([experience])

              setCardIndex(index + 1)
              setCardFormState(true)
            }}
            del={() => {
              const { usersArray, userIndex } = getLocalStorageData(user || '');

              if (userIndex > -1){
                usersArray[userIndex].experiences?.splice(index, 1)
                setUserInfo((prevState)=>({
                  ...prevState,
                  experiences: usersArray[userIndex].experiences
                }))
                localStorage.setItem('users', JSON.stringify(usersArray))
                setEditMode(true)
              }
            }}
            />
          ))}
          {!(userInfo.experiences && userInfo.experiences.length > 0) && !editMode && (
            <p className="nothing_here">Não há nada por aqui!</p>
          )}
          
          {editMode && (
            <NewExperienceCard
            setCardFormState={() => {
              setFormInfo(null)

              setCardFormState(true)
              setCardIndex(-1)
            }}/>
          )}          
        </div>
      </ExperiencesContainer>

      {userInfo.extraEmail || editMode ? (
        <ContactContainer id="contact">
          <h4>Sinta-se livre para me contatar a qualquer momento!</h4>
          {editMode ? (
            <input
            type="text"
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
            <a target="blank" href={userInfo.instaLink ? `${userInfo.instaLink}` : 'https://instagram.com'}>
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
            <a target="blank" href={userInfo.faceLink ? `${userInfo.faceLink}` : 'https://facebook.com'}>
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
            <a target="blank" href={userInfo.xLink ? `${userInfo.xLink}` : 'https://x.com'}>
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
            <a target="blank" href={userInfo.youLink ? `${userInfo.youLink}` : 'https://youtube.com'}>
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

      {linkFormState && <LinkForm action={(value: string) => {handleCallback(value)}} close={() => {setLinkFormState(false)}}/>}
      {cardFormState && <ExperienceForm value={formInfo} close={() => {setCardFormState(false)}} action={(value: string)=>{cardCallback(value)}}/>}
    </ProfilePageContainer>
  )
}
export default ProfilePage