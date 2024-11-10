import { CardContainer, OptionsCardContainer } from "./style"

type Props = {
    title: string,
    during: string,
    technologies: string[],
    description: string,
    repoLink?: string,
    editMode: boolean,
    setCardFormState: () => void
}

export const NewExperienceCard = ({setCardFormState}: {setCardFormState: ()=>void}) => {
    return (
        <CardContainer style={{cursor: 'pointer'}} onClick={setCardFormState}>
            <div className="middle">
                <img src="/assets/images/plus.png" alt="Mais"/>
                <h3>Adicionar Card</h3>
            </div>
        </CardContainer>
    )
}

const OptionsCard = ({setState}: {setState: () => void}) => {
    return (
        <OptionsCardContainer>
            <div className="option" onClick={setState}>
                <img src="/assets/images/edit.png" alt="Editar"/>
            </div>
            <div className="option">
                <img src="/assets/images/trash.png" alt="Deletar"/>
            </div>
        </OptionsCardContainer>
    )
}

const ExperiencesCard = ({title, during, technologies, description, repoLink, editMode, setCardFormState}: Props) => {
    return (
        <CardContainer>
            <div className="content">
                <h3>{title}</h3>
                <p className="during">{during}</p>

                <div className="technologies">
                    {technologies.map((tech, index) => (
                        <p key={index}>{tech}</p>
                    ))}
                </div>

                <p className="descrip">{description}</p>
            </div>
            
            {editMode && (
                <OptionsCard setState={() => setCardFormState()}/>
            )}

            {repoLink && (
                <a href={repoLink}><button>Ver repositório</button></a>
            )}
        </CardContainer>
    )
}
export default ExperiencesCard