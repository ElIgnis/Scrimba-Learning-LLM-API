import trollFace from "../assets/images/troll-face.png"

export default function MemeGeneratorHeader() {
    return (
        <header className="header">
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}