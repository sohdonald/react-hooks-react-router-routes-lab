import React from "react";
import { movies } from "../data";

function Movies() {

movies.map((movie)=>{
return (
  <div>
    {movie.title}
    {movie.time}
    <ul>{movie.genres}</ul>
  </div>
);
})

  return (
  <div>
<h1>Movies Page</h1>

  </div>
  );
}

export default Movies;
