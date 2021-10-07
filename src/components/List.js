import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function List(props) {

    const FavouriteComponent = props.favouriteComponent
    return (
       <>
            {
            props.movies == null ? <h1>empty</h1>:
            props.movies.map((movie,index) => <div className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="text"></img>
                <div onClick ={() => props.handleFavouriteClick(movie)}
                className="overlay d-flex">
                    <FavouriteComponent/>
                </div>
            </div>
            )}
        </>
    )
}

export default List
