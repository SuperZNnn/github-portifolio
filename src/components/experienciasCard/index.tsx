import { CardContainer, OptionsCardContainer } from "./style"

type Props = {
    title: string,
    during: string,
    technologies: string[],
    description: string,
    repoLink?: string,
    editMode: boolean
}

export const NewExperienceCard = () => {
    return (
        <CardContainer style={{cursor: 'pointer'}}>
            <div className="middle">
                <img src="/assets/images/plus.png" alt="Mais"/>
                <h3>Adicionar Card</h3>
            </div>
        </CardContainer>
    )
}

const OptionsCard = () => {
    return (
        <OptionsCardContainer>
            <div className="option">
                <img src="/assets/images/edit.png" alt="Editar"/>
            </div>
            <div className="option">
                <img src="/assets/images/trash.png" alt="Deletar"/>
            </div>
        </OptionsCardContainer>
    )
}

const ExperiencesCard = ({title, during, technologies, description, repoLink, editMode}: Props) => {
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
                <OptionsCard/>
            )}

            {repoLink && (
                <a href={repoLink}><button>Ver repositório</button></a>
            )}
        </CardContainer>
    )
}
export default ExperiencesCard