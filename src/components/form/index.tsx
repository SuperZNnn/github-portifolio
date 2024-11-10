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

