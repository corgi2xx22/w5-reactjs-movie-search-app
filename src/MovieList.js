import React from 'react';
import {Grid} from "@mui/material";
import MoviesCard from "./MoviesCard";

function MovieList({movies}) {
    return (
        <Grid container spacing = {2} mt={1}>
            {movies.map((movie)=>(
                <Grid item key={movie.id} xs={6} md={4} lg={3}>
                    <MoviesCard movie={movie}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default MovieList;