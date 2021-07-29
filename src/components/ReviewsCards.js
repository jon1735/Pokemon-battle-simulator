import React, {useState} from "react";
import { Card } from "semantic-ui-react";


function ReviewsCards({ movies }) {
  const [movieReview, setMovieReview] = useState("") 

  const { review, image, name, id } = movies

  const handleClick = () => {
    console.log(id)
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "review": movieReview
      })
    }
    fetch(`http://localhost:3001/movies/${id}`, configObj)
  }


  const changeMovieReview = (event) => {
    setMovieReview(event.target.value)
  }

  // const changeMovieReview = movies.filter((id) => {
  //   return id.review.toLowerCase().includes(movieReview.toLowerCase())
  // })
  

  return (
        <Card>
          <div>
            <div className="image">
              <img src={image} alt={name} width="150" height="200"/>
            </div>
            <div>
              <div className="review">Viewer Review: {review}</div>
            </div>
            <div className="content">
              <div className="header">{name}</div>
            </div>
          </div>
        <button onClick={handleClick}>Edit Review</button>
        <input type="text" value={movieReview} onChange={changeMovieReview}></input>
        </Card>
  )
}



export default ReviewsCards
