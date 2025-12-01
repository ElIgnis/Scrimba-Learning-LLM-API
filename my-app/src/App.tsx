import Header from "./components/AI_Chef/Header.tsx"
import AIChef from "./components/AI_Chef/AIChef.tsx";
import FormTemplate from "./Pages/FormTemplate/FormTemplate.tsx";
import MemeGeneratorHeader from "./components/MemeGeneratorHeader.tsx";
import MemeGeneratorBody from "./components/MemeGeneratorBody.tsx";
import WindowApp from "./components/WindowApp.tsx";

export default function App(){
    return(
        <>
            {/*<Header/>*/}
            {/*<AIChef/>*/}
            {/*<FormTemplate/>*/}
            <MemeGeneratorHeader/>
            <MemeGeneratorBody/>
            {/*  <WindowApp/>*/}
        </>
    );
}