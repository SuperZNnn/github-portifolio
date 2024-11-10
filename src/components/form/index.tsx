import { useEffect, useRef } from "react"
import { BlurContainer } from "./style"
import { useForm } from "react-hook-form"

type Props = {
    close: () => void
    action: (value: string) => void,
    value?: [
        {
            title: string;
            during: string;
            technologies: string[];
            descrip: string;
            link?: string;
        }
    ] | null
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
export const ExperienceForm = ({close, action, value}: Props) => {
    const { register, setValue, handleSubmit, formState: { isValid }, watch } = useForm<{ title: string, during: string, technologies: string, descrip: string, link: string }>({
        mode: "onChange"
    });

    useEffect(() => {
        if (value) {
            const { title, during, technologies, descrip, link } = value[0];
            setValue("title", title);
            setValue("during", during);
            setValue("technologies", technologies.join(", "));
            setValue("descrip", descrip);
            setValue("link", link || "");
        }
    }, [value, setValue]);

    const onSubmit = (data: ExperienceFormData) => {
        const format = {
            ...data,
            technologies: data.technologies.split(",").map((tech: string) => tech.trim())
        };
        action(JSON.stringify(format));

        setTimeout(() => {
            close();
        }, 200);
    };

    // Observar os valores dos campos para garantir que o formulário atualize corretamente
    const watchAllFields = watch();

    return (
        <BlurContainer>
            <div className="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Criação de Card</h3>
                    <input
                        type="text"
                        placeholder="Título"
                        {...register("title", { required: true })}
                        defaultValue={value ? value[0].title : ""}
                    />
                    <input
                        type="text"
                        placeholder="Período de atuação"
                        {...register("during", { required: true })}
                        defaultValue={value ? value[0].during : ""}
                    />
                    <input
                        type="text"
                        placeholder="Habilidades (Separe-as por vírgula)"
                        {...register("technologies", { required: true })}
                        defaultValue={value ? value[0].technologies.join(", ") : ""}
                    />
                    <textarea
                        placeholder="Descreva sua experiência"
                        {...register("descrip", { required: true })}
                        defaultValue={value ? value[0].descrip : ""}
                    />
                    <input
                        type="text"
                        placeholder="Link do repositório (Opcional)"
                        {...register("link")}
                        defaultValue={value ? value[0].link : ""}
                    />

                    <div className="buttonsContainer">
                        <button className="cancelButton" type="button" onClick={close}>Cancelar</button>
                        <button className="saveButton" type="submit" disabled={!isValid}>Salvar</button>
                    </div>
                </form>
            </div>
        </BlurContainer>
    );
};
