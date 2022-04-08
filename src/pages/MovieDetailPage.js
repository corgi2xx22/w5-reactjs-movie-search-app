import React, { useState, useEffect } from "react";
import {
    Alert,
    Box,
    Breadcrumbs,
    Card,
    Container,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import apiService from "../app/apiService";
import LoadingScreen from "../component/LoadingScreen";

function MovieDetailPage() {
    const params = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (params.id){
            const getMovie = async () =>{
                setLoading(true);
            try{
                const response = await apiService.get(`movies/${params.id}`);
                setMovie(response.data);
                setError("");
            }catch (error){
                setError(error.message);
            }
            setLoading(false);
        };
        getMovie();
        }
    },[params]);

    return (
        <Container sx={{my:3}}>
            <Breadcrumbs sx={{mb:4}}>
                <Link underline="hover" color="inherit" component={RouterLink} to="/">
                    MovieApp
                </Link>
                <Typography color="text.primary">{movie.name}</Typography>
            </Breadcrumbs>
            <Box sx={{position:"relative",height:1}}>
                {loading ? (<LoadingScreen/>):(
                    <>
                        {error ? (
                            <Alert severity="error">{error}</Alert>
                        ):(
                            <>
                                {movie ?(
                                    <Card>
                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <Box
                                                    sx={{
                                                        borderRadius:2,
                                                        overflow:"hidden",
                                                        display:"flex",
                                                    }}
                                                    readOnly
                                                >
                                                    <img
                                                        src={movie.cover}
                                                        width="100%"
                                                        height="100%"
                                                        alt="movie"
                                                    />
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color:"text.secondary",
                                                            display:"block",
                                                        }}
                                                    >
                                                        {movie.genres}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    mt:2,
                                                    mb:1,
                                                    display:"block",
                                                    textTransform:"uppercase",
                                                    fontWeight:"bold",
                                                }}
                                            >
                                                {movie.original_title}
                                            </Typography>
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                spacing={1}
                                                sx={{mb:2}}
                                                readOnly
                                            >
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        display:"block",
                                                        color:"text.secondary"
                                                    }}
                                                >
                                                    {movie.tagline}
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        display:"block",
                                                        color:"text.secondary"
                                                    }}
                                                >
                                                    {movie.overview}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Card>
                                ):(
                                    <Typography variant="h6">Product not found!</Typography>
                                )}
                            </>
                        )}
                    </>
                )}
            </Box>
        </Container>
    );
}

export default MovieDetailPage;