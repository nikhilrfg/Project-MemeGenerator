import React from "react"
// import memesData from "../memesData.js"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })

    // const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    // const [allMemes, setAllMemes] = React.useState(memesData)
    const [allMemes, setAllMemes] = React.useState([])

    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    // }, [])

    React.useEffect(() => {
        async function getMemes(){
            const res = fetch("https://api.imgflip.com/get_memes")
            const data = await res.json
            setAllMemes(data.data.memes)
        }
        getMemes()       
    }, [])

    // React.useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemes(data.data.memes)
    // }, [])

    console.log(allMemes)

    function getMemeImage() {
        // const memesArray = memesData.data.memes
        // const memesArray = allMemeImages.data.memes
         // const randomNumber = Math.floor(Math.random() * memesArray.length)
         // const url = memesArray[randomNumber].url

        const allMemes = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        // console.log(url)
        // setMemeImage(memesArray[randomNumber].url)

        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     randomImage
        // }))

        setMeme(prevMeme => {
            return {
                topText: "",
                bottomText: "",
                randomImage: url
             
            }
        })
    }

    function handleChange(event){
        const{name, value} = event.target
        //  setMeme(prevMeme => ({
        //     ...prevMeme,
        //     [name]: value
        // }))

        setMeme(prevMeme => {
            return {
                topText: "",
                bottomText: "",
                randomImage: url,
                [name]: value
             
            }
        })
        
    }
    return (
        <main>
            <div className="form">
                    <input 
                            type="text"
                            placeholder="Top text"
                            className="form--input"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                    />
                    <input 
                        type="text"
                        className="form--input"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                 <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                {/* <img src={memeImage} className="meme--image"/> */}
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}