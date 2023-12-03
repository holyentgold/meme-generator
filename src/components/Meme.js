import React, {useState, useEffect} from 'react'



const Meme = () => {
    const [meme, setMeme] = useState({ 
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
    }, [] )


    
     
    function getMemeImage() {
        const randonNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randonNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url }))  
        
     }

     function handlehange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }) )
     }

  return (
        <main>
            <div className='form'>
              <input 
              className='form-input' 
              type="text" 
              placeholder='Top text'
              name='topText' 
              value={meme.topText}
              onChange={handlehange}
              />  
              <input 
              className='form-input'  
              type="text" 
              placeholder='Bottom text'
              name='bottomText' 
              value={meme.bottomTextText}
              onChange={handlehange} 
              />
              <button 
               className='form-button' 
               onClick={getMemeImage}>
                Get a new meme image
              </button>  
            </div>
            <div className='meme'>
            <img src={meme.randomImage} alt='meme_image' className='meme-image' />
            <h2 className='meme-text top'>{meme.topText}</h2>
            <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
  )
} 

export default Meme