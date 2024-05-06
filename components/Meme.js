import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage() {
        // const memesArray = memesData.data.memes
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
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
    return (
        <main>
            <div className="form">
                    <input 
                            type="text"
                            placeholder="Top text"
                            className="form--input"
                    />
                    <input 
                        type="text"
                        className="form--input"
                        placeholder="Bottom text"
                    />
                 <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {/* <img src={memeImage} className="meme--image"/> */}
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}