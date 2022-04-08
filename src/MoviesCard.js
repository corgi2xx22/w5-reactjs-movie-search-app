import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Stack, Button, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function MoviesCard({ movie }) {
    const navigate = useNavigate();
    return (
        <Card>
            <CardActionArea onClick={()=>navigate(`/movies/${movie.id}`)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={movie.cover}
                    alt={movie.name}
                    />
                <CardContent>
                    <Typography gutterBottom variant="body" component="div" noWrap>
                        {movie.name}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={0.5}
                        alignItems="center"
                        justifyContent="flex-end"
                        >
                    </Stack>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color ="inherit">
                    ...
                </Button>
            </CardActions>
        </Card>
    );
}

export default MoviesCard;