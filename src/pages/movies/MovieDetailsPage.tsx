import {FC, useEffect, useState} from "react";
import {useParams, Link} from "react-router";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MovieResponseDto} from "../../models/movies/MovieResponseDto.ts";
import api from "../../services/api.ts";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const MovieDetailsPage:FC =()=> {
    const {id} = useParams();
    const  [movie,setMovie] = useState<MovieResponseDto>({id:"",directorName:"",name:"",imdb:0,categoryName:"",publishDate:"",imageUrl:"",description:"",players:[]});


    useEffect(() => {
        fetchData()
    }, [id]);


    const  fetchData = async ()=>{

        try {
            const  response = await  api.get(`/Movies/getdetails?id=${id}`);
            setMovie(response.data)

            console.log(movie)

        }catch (error:any){
            console.log(error)
        }


    }



    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={movie.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} gutterBottom>
                    {movie.description}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary' }} gutterBottom >
                   Imdb Puanı :   {movie.imdb}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary' }} gutterBottom>
                    Yayın Tarihi  :   {movie.publishDate}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary' }} gutterBottom>
                    Kategori :   {movie.categoryName}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary' }} gutterBottom>
                    Yönetmen :   {movie.directorName}
                </Typography>


                <Typography variant="h5" color={"textSecondary"}>Oyuncular</Typography>

                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    aria-label="contacts"
                >

                    {

                        movie.players.map((value,index)=>(
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={value} />
                                </ListItemButton>
                            </ListItem>
                        ))

                    }



                </List>


            </CardContent>
            <CardActions>
                <Link style={{textDecoration:"none"}} to={"/"}>
                <Button size="small" variant={"outlined"}>Anasayfaya Dön </Button>
                </Link>

                <Button variant="outlined" size="small" color={"error"}>Sil</Button>

                <Button variant="outlined" size="small" color="warning">Güncelle</Button>


            </CardActions>
        </Card>
    );
}

export default MovieDetailsPage;
