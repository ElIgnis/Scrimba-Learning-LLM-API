import {useState, useEffect} from "react";

export default function MemeGeneratorBody() {
    const [meme, setMeme] = useState({
        topText: "Meme Top Text",
        bottomText: "Meme Bottom Text",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    });

    const[memeArr, setMemeArr] = useState([]);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(rsp => rsp.json()).then(rsp => setMemeArr(rsp.data.memes));
        console.log(memeArr);
    },[])

    function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        console.log(memeArr);
        const { value, name } = event.currentTarget;
        setMeme(prevMeme =>
            ({
                ...prevMeme,
                [name]: value
            }));
    }

    function GetRandomMeme()
    {
        const randIdx = Math.floor(Math.random() * memeArr.length);
        console.log(randIdx);
        console.log(memeArr[randIdx]);
        setMeme(prevMeme =>
            ({
                ...prevMeme,
                imageUrl: memeArr[randIdx].url
            }));
    }

    return (
        <main>
            <div className="memeForm">
                <label> Top Text
                    <input
                        type="text"
                        placeholder="Meme Generator Top Text"
                        name="topText"
                        onChange={HandleInputChange}
                        value={meme.topText}
                    />
                </label>

                <label> Bottom Text
                    <input
                        type="text"
                        placeholder="Meme Generator Bottom Text"
                        name="bottomText"
                        onChange={HandleInputChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={GetRandomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="memeImage">
                <img src= {meme.imageUrl} alt="meme image" />
                <span className={"top"}>{meme.topText}</span>
                <span className={"bottom"}>{meme.bottomText}</span>
            </div>
        </main>
    );
}