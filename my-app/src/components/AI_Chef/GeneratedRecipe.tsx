import ReactMarkdown from "react-markdown";

export default function GeneratedRecipe(props: any) {
    return (
        <section className="suggested-recipe-container" aria-live="polite" ref={props.ref}>
            <ReactMarkdown children={props.recipe}/>
        </section>
    )
}