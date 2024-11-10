import { BlurContainer } from "./style"
import { useForm } from "react-hook-form"

type Props = {
    close: () => void
    action: (link: string) => void
}

export const LinkForm = ({close, action}: Props) => {
    const { register, handleSubmit } = useForm<{ link: string }>()

    const onSubmit = (data: { link: string }) => {
        action(data.link)
        setTimeout(() => {
            close()
        }, 200);
    }

    return(
        <BlurContainer>
            <div className="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Adicionar Link</h3>
                    <input
                        type="text"
                        placeholder="Digite a URL"
                        {...register("link")}
                    />

                    <div className="buttonsContainer">
                        <button className="cancelButton" type="button" onClick={close}>Cancelar</button>
                        <button className="saveButton" type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </BlurContainer>
    )
}

type ExperienceFormData = {
    title: string;
    during: string;
    technologies: string;
    descrip: string;
    link: string;
};
export const ExperienceForm = () => {
    const { register, handleSubmit, formState: { isValid } } = useForm<{ title: string, during: string, technologies: string, descrip: string, link: string }>({
        mode: "onChange"
    })

    const onSubmit = (data: ExperienceFormData) => {
        const format = {
            ...data,
            technologies: data.technologies.split(",").map((tech: string) => tech.trim())
        }
        console.log(format)
    }

    return(
        <BlurContainer>
            <div className="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Criação de Card</h3>
                    <input
                        type="text"
                        placeholder="Título"
                        {...register("title", {required: true})}
                    />
                    <input
                        type="text"
                        placeholder="Período de atuação"
                        {...register("during", {required: true})}
                    />
                    <input
                        type="text"
                        placeholder="Habilidades (Separe-as por vírgula)"
                        {...register("technologies", {required: true})}
                    />
                    <textarea
                        placeholder="Descreva sua experiência"
                        {...register("descrip", {required: true})}
                    />
                    <input
                        type="text"
                        placeholder="Link do repositório (Opicional)"
                        {...register("link")}
                    />

                    <div className="buttonsContainer">
                        <button className="cancelButton" type="button">Cancelar</button>
                        <button className="saveButton" type="submit" disabled={!isValid}>Salvar</button>
                    </div>
                </form>
            </div>
        </BlurContainer>
    )
}