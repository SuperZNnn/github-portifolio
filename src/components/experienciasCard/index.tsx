import { CardContainer } from "./style"

const ExperiencesCard = () => {

    return (
        <CardContainer>
            <div className="content">
                <h3>Dev Junior da NASA</h3>
                <p className="during">Junho - 2002 - 2020</p>

                <div className="technologies">
                    <p>Figma</p>
                    <p>React</p>
                    <p>Typescript</p>
                </div>

                <p className="descrip">Um projetão fellas da minha cidade que é muito fellas, um projeto tão fellas que não deixa de ser fellas, um projetinho fellas feito pra ser fellas, agora continuarei escrevendo pra ocupar espaço e ocupar mais espaço e ocupar mais espaço</p>
            </div>
            
            <button>Ver repositório</button>
        </CardContainer>
    )
}
export default ExperiencesCard