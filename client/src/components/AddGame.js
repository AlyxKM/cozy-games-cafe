import { useState } from "react"

function AddGame({addNewGame}) {

    const [title, setTitle] =useState ("")
    const [image, setImage] =useState ("")
    const [developer, setDeveloper] =useState ("")
    const [publisher, setPublisher] =useState ("")
    const [desc, setDesc] =useState("")
    const [tags, setTags] =useState("")
    const [rating, setRating] =useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
    const newGame = {
        title : title,
        image : image,
        developer : developer,
        publisher : publisher,
        desc : desc,
        tags : tags,
        rating: rating
    }

    fetch('http://localhost:3000/games', {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newGame)
    })
        .then(res =>res.json())
        .then(newGame => {
            addNewGame(newGame)
            setTitle("")
            setImage("")
            setDeveloper("")
            setPublisher("")
            setDesc("")
            setTags("")
            setRating(0)
        })
    }

    return (
        <div className="AddGame">
            <h3>Want To Add A New Game?</h3>
         <form className="col-auto" onSubmit={handleSubmit}>
             <div className="col-auto">
            <input className="col-sm-4 col-form-label" value= {title} onChange={(e) => setTitle(e.target.value)}type="text" name="title" placeholder="Game Title" />
            </div>
            <div className="col-auto AddGame-input">
            <input className="col-sm-4 col-form-label" value= {image} onChange={(e) => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" />
            </div>
            <div className="col-auto AddGame-input">
            <input className="col-sm-4 col-form-label" value= {developer} onChange={(e) => setDeveloper(e.target.value)}type="text" name="developer" placeholder="Developer" />
            </div>
            <div className="col-auto AddGame-input">
            <input className="col-sm-4 col-form-label"value= {publisher} onChange={(e) => setPublisher(e.target.value)}type="text" name="publisher" placeholder="Publisher" />
            </div>
            <div className="col-auto AddGame-input">
            <input className="col-sm-4 col-form-label" value= {desc} onChange={(e) => setDesc(e.target.value)} type="text" name="desctiption" placeholder="Game Description" />
            </div>
            <div className="col-auto AddGame-input">
            <input className="col-sm-4 col-form-label" value= {tags} onChange={(e) => setTags(e.target.value)} type="text" name="tags" placeholder="Any Tags" />
            </div>
            <div className="AddGame-btn">
            <button className="btn btn-primary" type="submit">Submit Game</button>
            </div>
        </form>

        </div>
    )
}

export default AddGame