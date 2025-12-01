import reactImg  from "../../assets/images/react.svg";

export default function Header() {
    return (
        <header>
            <img src={reactImg} alt="logo"/>
            <h1>LLM API Practice</h1>
        </header>
    );
}