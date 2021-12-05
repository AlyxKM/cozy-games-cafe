import { useState } from "react"

function AddGame({addNewGame}) {

    const [title, setTitle] =useState ("")
    const [image, setImage] =useState ("")
    const [developer, setDeveloper] =useState ("")
    const [publisher, setPublisher] =useState ("")
    const [desc, setDesc] =useState("")
    const [tags, setTags] =useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    const newGame = {
        title : title,
        image : image,
        developer : developer,
        publisher : publisher,
        desc : desc,
        tags : tags
    }

    fetch('http://localhost:3000/games', {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newGame)
    })
        .then(r=>r.json())
        .then(newGame => {
            addNewGame(newGame)
            setTitle("")
            setImage("")
            setDeveloper("")
            setPublisher("")
            setDesc("")
            setTags("")
        })
    }

    return (
        <div className="AddGame">
            <h3>Want To Add A New Game?</h3>
         <form onSubmit={handleSubmit}>
            <input value= {title} onChange={(e) => setTitle(e.target.value)}type="text" name="title" placeholder="Game Title" />
            <input value= {image} onChange={(e) => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" />
            <input value= {developer} onChange={(e) => setDeveloper(e.target.value)}type="text" name="developer" placeholder="Developer" />
            <input value= {publisher} onChange={(e) => setPublisher(e.target.value)}type="text" name="publisher" placeholder="Publisher" />
            <input value= {desc} onChange={(e) => setDesc(e.target.value)} type="text" name="desctiption" placeholder="Game Description" />
            <input value= {tags} onChange={(e) => setTags(e.target.value)} type="text" name="tags" placeholder="Any Tags" />
            <button type="submit">Submit Game</button>
        </form>

        </div>
    )
}

export default AddGame