import { CardContainer } from "./style"

type Props = {
    title: string,
    during: string,
    technologies: string[],
    description: string,
    repoLink?: string
}

const ExperiencesCard = ({title, during, technologies, description, repoLink}: Props) => {

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
            
            {repoLink && (
                <a href={repoLink}><button>Ver repositório</button></a>
            )}
        </CardContainer>
    )
}
export default ExperiencesCard