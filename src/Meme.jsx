import React from 'react'
import memesData from './memesData'

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("")

    function handleClick(event){
        event.preventDefault();
        let memesArray=memesData.data.memes;
        const randomElement = memesArray[Math.floor(Math.random() * memesArray.length)];  
        const url = randomElement.url
        setMemeImage(url)
        
       
    }
    
    return (
        <main>
            <form className='form'>
                <input type='text' placeholder='Top text' className='form--input' />
                <input type='text' placeholder='Bottom text' className='form--input' />
                <button onClick={handleClick} className='form--button'>Get a new meme image  🖼</button>
            </form>
            
            <img src={memeImage} className='meme--image'/>
        </main>
        
    )
}